import clsx from "clsx";
import { Clause, ClauseType } from "./types";
import { getVariants } from "./variants";

interface VariantSuggestionsProps {
  type: ClauseType;
  onSelectSuggestion: (clause: Clause) => void;
}

const VariantSuggestions = ({
  type,
  onSelectSuggestion: handleSelectSuggestion,
}: VariantSuggestionsProps) => {
  const suggestions = getVariants(type);

  return (
    <div className="w-32 rounded-2xl bg-medium-grey">
      {suggestions.map((suggestion, index) => (
        <button
          className={clsx(
            "w-full px-4 hover:bg-white/10 text-left",
            index === 0 ? "pt-2 rounded-t-2xl" : "pt-1",
            index === suggestions.length - 1 ? "pb-2 rounded-b-2xl" : "pb-1"
          )}
          key={suggestion.variant}
          onClick={() => handleSelectSuggestion(suggestion)}
        >
          {suggestion.displayName}
        </button>
      ))}
    </div>
  );
};

export default VariantSuggestions;
