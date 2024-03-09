import { Editor, Extension, Range } from "@tiptap/core";
import { SuggestionEventType, SuggestorPlugin } from "./suggestor";
import { Command } from "../../types";
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

const createOrUpdatePopup = (
  textBeforeCursor: string,
  referenceRect: DOMRect,
  range: Range,
  editor: Editor,
  storage: CommandSuggestorStorage
) => {
  const props: CommandSuggestionsProps = {
    textBeforeCursor,
    commands: storage.commands,
    onSelectCommand: (command) => command.addToQuery(editor, range),
  };

  if (!storage.popup) {
    storage.popup = openPopup({
      editor: editor,
      component: CommandSuggestions,
      props,
      referenceRect,
      placement: "bottom-start",
      offset: { x: -16, y: 18 },
    });
    return;
  }

  storage.popup.update(props);
  storage.popup.show();
};

const handleSuggestionChange = (
  textBeforeCursor: string,
  referenceRect: DOMRect,
  range: Range,
  event: SuggestionEventType,
  editor: Editor,
  storage: CommandSuggestorStorage
) => {
  switch (event) {
    case "editor-focussed":
      createOrUpdatePopup(
        textBeforeCursor,
        referenceRect,
        range,
        editor,
        storage
      );
      return;
    case "editor-unfocussed":
      // setTimeout(() => storage.popup?.hide(), 4);
      return;
    case "text-changed":
      createOrUpdatePopup(
        textBeforeCursor,
        referenceRect,
        range,
        editor,
        storage
      );
      return;
    case "selection-changed":
      return;
  }
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
      SuggestorPlugin((textBeforeCursor, referenceRect, range, event) =>
        handleSuggestionChange(
          textBeforeCursor,
          referenceRect,
          range,
          event,
          this.editor,
          this.storage
        )
      ),
    ];
  },
});
