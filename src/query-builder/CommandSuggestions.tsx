import clsx from "clsx";
import { SelectorBuilder } from "./types";

export interface CommandSuggestionsProps {
  builders: SelectorBuilder[];
  onSelectBuilder: (builder: SelectorBuilder) => void;
}

export const CommandSuggestions = ({
  builders,
  onSelectBuilder: handleSelectBuilder,
}: CommandSuggestionsProps) => (
  <div className="w-64 rounded-lg bg-medium-grey shadow-xl">
    {builders.map((builder, index) => (
      <button
        className={clsx(
          "w-full px-4 hover:bg-white/10 text-left",
          index == 0 ? "pt-4" : "pt-2",
          index == builders.length - 1 ? "pb-4" : "pb-2"
        )}
        key={builder.name}
        onClick={() => handleSelectBuilder(builder)}
      >
        {builder.name}
      </button>
    ))}
  </div>
);
