import { Editor, Extension } from "@tiptap/core";
import { SuggestorPlugin } from "./suggestions";
import { Command } from "../types";

const COMMAND_EXTENSION_COMMAND_SUGGESTOR = "commandSuggestion";

interface CommandSuggestorStorage {
  commands: Command[];
}

export const registerCommand = (editor: Editor, command: Command) => {
  const commandSuggestorStorage = editor.extensionStorage[
    COMMAND_EXTENSION_COMMAND_SUGGESTOR
  ] as CommandSuggestorStorage;

  commandSuggestorStorage.commands.push(command);
};

export const CommandSuggestor = Extension.create<
  Record<string, never>,
  CommandSuggestorStorage
>({
  name: "commandSuggestion",
  content: "text*",

  addStorage() {
    return {
      commands: [],
    };
  },

  addProseMirrorPlugins() {
    return [
      SuggestorPlugin((textBeforeCursor: string) => {
        console.log(textBeforeCursor);
      }),
    ];
  },
});
