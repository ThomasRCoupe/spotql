import { Plugin, PluginKey } from "@tiptap/pm/state";
import { EditorView } from "@tiptap/pm/view";

const SUGGESTOR_PLUGIN_KEY = new PluginKey("suggestor");

export const SuggestorPlugin = (
  suggest: (textBeforeCursor: string, selectionRect: unknown) => void
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

          const selectionRect = getSelectionRect(view);
          if (!selectionRect) {
            return;
          }

          suggest(textBeforeCursor, selectionRect);
        },
      };
    },
  });

const getSelectionRect = (view: EditorView) => {
  const { from, to } = view.state.selection;
  const startCoords = view.coordsAtPos(from);
  const endCoords = view.coordsAtPos(to);

  if (!startCoords || !endCoords) {
    return;
  }

  return {
    left: startCoords.left,
    top: startCoords.top,
    right: endCoords.right,
    bottom: endCoords.bottom,
    width: endCoords.right - startCoords.left,
    height: endCoords.bottom - startCoords.top,
  };
};
