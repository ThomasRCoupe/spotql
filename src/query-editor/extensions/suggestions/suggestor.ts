import { Range, posToDOMRect } from "@tiptap/core";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import { EditorView } from "@tiptap/pm/view";

const SUGGESTOR_PLUGIN_KEY = new PluginKey("suggestor");

export type SuggestionEventType =
  | "text-changed"
  | "selection-changed"
  | "editor-focussed"
  | "editor-unfocussed";

type OnChangeFunction = (
  textBeforeCursor: string,
  selectionRect: DOMRect,
  range: Range,
  event: SuggestionEventType
) => void;

export const SuggestorPlugin = (onChange: OnChangeFunction) =>
  new Plugin({
    key: SUGGESTOR_PLUGIN_KEY,
    view: () => {
      return {
        update: (view, prevState) => {
          const { doc, selection } = view.state;
          const { doc: prevDoc, selection: prevSelection } = prevState;

          const docChanged = !doc.eq(prevDoc);
          const selectionChanged = !selection.eq(prevSelection);

          console.log("doc", doc);

          if (!docChanged && !selectionChanged) {
            return;
          }

          if (!docChanged && selectionChanged) {
            handleChange(view, onChange, "selection-changed");
            return;
          }

          handleChange(view, onChange, "text-changed");
        },
      };
    },
    props: {
      handleDOMEvents: {
        focus(view) {
          handleChange(view, onChange, "editor-focussed");
          return false;
        },
        blur(view) {
          handleChange(view, onChange, "editor-unfocussed");
          return false;
        },
      },
    },
  });

const handleChange = (
  view: EditorView,
  onChange: OnChangeFunction,
  event: SuggestionEventType
) => {
  const { selection } = view.state;
  const nodeBeforeCursor = view.state.selection.$from.nodeBefore;
  const textBeforeCursor = nodeBeforeCursor?.text ?? "";

  const range = {
    from: selection.to - (nodeBeforeCursor ? nodeBeforeCursor.nodeSize : 0),
    to: selection.to,
  };

  const selectionRect = posToDOMRect(view, range.from, range.to);

  onChange(textBeforeCursor, selectionRect, range, event);
};
