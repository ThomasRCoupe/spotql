import { posToDOMRect } from "@tiptap/core";
import { Plugin, PluginKey } from "@tiptap/pm/state";

const SUGGESTOR_PLUGIN_KEY = new PluginKey("suggestor");

export const SuggestorPlugin = (
  suggest: (textBeforeCursor: string, selectionRect: DOMRect) => void
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

          const textBeforeCursor = selection.$from.nodeBefore?.text;
          if (!textBeforeCursor) {
            return;
          }

          const selectionRect = posToDOMRect(
            view,
            selection.from,
            selection.to
          );

          suggest(textBeforeCursor, selectionRect);
        },
      };
    },
  });
