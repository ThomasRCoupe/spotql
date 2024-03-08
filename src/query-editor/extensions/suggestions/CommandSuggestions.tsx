import { Command } from "../types";

interface CommandSuggestionsProps {
  commands: Command[];
}

export const CommandSuggestions = ({ commands }: CommandSuggestionsProps) => (
  <div>
    {commands.map((command) => (
      <div>{command.displayName}</div>
    ))}
  </div>
);
