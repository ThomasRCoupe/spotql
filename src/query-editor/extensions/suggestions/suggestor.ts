import { posToDOMRect } from "@tiptap/core";
import { Plugin, PluginKey } from "@tiptap/pm/state";

const SUGGESTOR_PLUGIN_KEY = new PluginKey("suggestor");

export const SuggestorPlugin = (
  onChange: (
    textBeforeCursor: string,
    selectionRect: DOMRect,
    docChanged: boolean
  ) => void
) =>
  new Plugin({
    key: SUGGESTOR_PLUGIN_KEY,
    view: () => {
      return {
        update: (view, prevState) => {
          const { doc, selection } = view.state;
          const { doc: prevDoc, selection: prevSelection } = prevState;

          const docChanged = !doc.eq(prevDoc);
          const selectionChanged = !selection.eq(prevSelection);

          if (!docChanged && !selectionChanged) {
            return;
          }

          const nodeBeforeCursor = selection.$from.nodeBefore;
          if (!nodeBeforeCursor || !nodeBeforeCursor.text) {
            return;
          }

          const selectionRect = posToDOMRect(
            view,
            selection.to - nodeBeforeCursor.nodeSize,
            selection.to
          );

          onChange(nodeBeforeCursor.text, selectionRect, docChanged);
        },
      };
    },
  });
