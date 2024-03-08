import { Command } from "../types";

export interface CommandSuggestionsProps {
  textBeforeCursor: string;
  commands: Command[];
}

export const CommandSuggestions = ({
  textBeforeCursor,
  commands,
}: CommandSuggestionsProps) => {
  const filteredCommands = commands.filter((command) =>
    command.displayName.toLowerCase().includes(textBeforeCursor.toLowerCase())
  );

  if (filteredCommands.length == 0) {
    return;
  }

  return (
    <div className="w-32 p-2 rounded-md bg-dark-grey font-mono">
      {filteredCommands.map((command) => (
        <div key={command.nodeName}>{command.displayName}</div>
      ))}
    </div>
  );
};
