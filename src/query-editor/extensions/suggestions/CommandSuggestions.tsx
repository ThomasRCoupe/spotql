import clsx from "clsx";
import { Command } from "../../types";

export interface CommandSuggestionsProps {
  textBeforeCursor: string;
  commands: Command[];
  onSelectCommand: (command: Command) => void;
}

export const CommandSuggestions = ({
  textBeforeCursor,
  commands,
  onSelectCommand: handleSelectCommand,
}: CommandSuggestionsProps) => {
  const filteredCommands = commands.filter((command) =>
    command.name.toLowerCase().includes(textBeforeCursor.toLowerCase())
  );

  if (filteredCommands.length == 0) {
    return;
  }

  return (
    <div className="w-64 rounded-md bg-medium-grey shadow-xl font-mono">
      {filteredCommands.map((command, index) => (
        <button
          className={clsx(
            "w-full px-4 hover:bg-white/10 text-left",
            index == 0 ? "pt-4" : "pt-2",
            index == filteredCommands.length - 1 ? "pb-4" : "pb-2"
          )}
          key={command.name}
          onClick={() => {
            handleSelectCommand(command);
          }}
        >
          {command.name}
        </button>
      ))}
    </div>
  );
};
