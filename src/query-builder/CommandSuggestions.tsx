import clsx from "clsx";

export interface CommandSuggestionsProps {
  commands: string[];
}

export const CommandSuggestions = ({ commands }: CommandSuggestionsProps) => (
  <div className="w-64 rounded-md bg-medium-grey shadow-xl">
    {commands.map((command, index) => (
      <button
        className={clsx(
          "w-full px-4 hover:bg-white/10 text-left",
          index == 0 ? "pt-4" : "pt-2",
          index == commands.length - 1 ? "pb-4" : "pb-2"
        )}
      >
        {command}
      </button>
    ))}
  </div>
);
