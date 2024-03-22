import SuggestionWord from "./SuggestionWord";
import { SelectorDraft } from "./types";

interface SelectorWordsProps {
  selector: SelectorDraft | undefined;
  suggestions: SelectorDraft[];
}

const SelectorWords = ({ selector, suggestions }: SelectorWordsProps) => {
  if (!selector) {
    return (
      <SuggestionWord
        suggestions={suggestions.map((suggestion) => ({
          name: suggestion.displayName,
          key: suggestion.type,
        }))}
        renderSuggestion={(suggestion) => suggestion.name}
        onSuggestionSelect={(suggestion) =>
          console.log("suggestion selected", suggestion)
        }
      >
        Get
      </SuggestionWord>
    );
  }

  switch (selector.type) {
    case "get-all":
      return;
    case "get-random":
      return;
  }
};

export default SelectorWords;
