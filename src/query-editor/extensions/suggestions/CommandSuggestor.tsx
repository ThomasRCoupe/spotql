import { Editor, Extension } from "@tiptap/core";
import { SuggestorPlugin } from "./suggestions";
import { Command } from "../types";
import { Popup, openPopup } from "../../utils/popup";
import {
  CommandSuggestions,
  CommandSuggestionsProps,
} from "./CommandSuggestions";

const COMMAND_EXTENSION_COMMAND_SUGGESTOR = "commandSuggestion";

interface CommandSuggestorStorage {
  popup?: Popup<CommandSuggestionsProps>;
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
      SuggestorPlugin((textBeforeCursor: string, referenceRect: DOMRect) => {
        if (this.storage.popup) {
          this.storage.popup.update({ textBeforeCursor });
          return;
        }

        this.storage.popup = openPopup({
          editor: this.editor,
          component: CommandSuggestions,
          props: { textBeforeCursor },
          referenceRect,
          placement: "bottom-start",
          offset: 0,
        });
      }),
    ];
  },
});
