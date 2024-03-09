import { Editor, Extension } from "@tiptap/core";
import { SuggestorPlugin } from "./suggestor";
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
      SuggestorPlugin(
        (
          textBeforeCursor: string,
          referenceRect: DOMRect,
          docChanged: boolean
        ) => {
          if (!docChanged && this.storage.popup) {
            this.storage.popup.update({
              textBeforeCursor,
              commands: this.storage.commands,
            });
            return;
          }

          this.storage.popup?.close();

          this.storage.popup = openPopup({
            editor: this.editor,
            component: CommandSuggestions,
            props: { textBeforeCursor, commands: this.storage.commands },
            referenceRect,
            placement: "bottom-start",
            offset: { x: -8, y: 10 },
          });
        }
      ),
    ];
  },
});
