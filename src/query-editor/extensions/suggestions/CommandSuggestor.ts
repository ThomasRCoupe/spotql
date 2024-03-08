import { Extension } from "@tiptap/core";
import { SuggestorPlugin } from "./suggestions";

export const CommandSuggestor = Extension.create({
  name: "commandSuggestion",
  content: "text*",

  addProseMirrorPlugins() {
    return [
      SuggestorPlugin((textBeforeCursor: string) => {
        console.log(textBeforeCursor);
      }),
    ];
  },
});
