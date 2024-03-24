import SuggestionWord from "../SuggestionWord";
import Word from "../Word";
import { SelectorDraft } from "../../types";
import GetAllTracks from "./get-all-tracks/GetAllTracks";
import GetRandomTracks from "./get-random-tracks/GetRandomTracks";

interface SelectorSubclauseProps {
  selector: SelectorDraft | undefined;
  onChange: (selector: SelectorDraft) => void;
  suggestions: SelectorDraft[];
}

const renderSubclause = (
  selector: SelectorDraft,
  handleChange: (selector: SelectorDraft) => void
) => {
  switch (selector.type) {
    case "get-all-tracks":
      return <GetAllTracks />;
    case "get-random-tracks":
      return (
        <GetRandomTracks
          quantity={selector.quantity}
          onQuantityChange={(quantity) =>
            handleChange({ ...selector, quantity })
          }
        />
      );
  }
};

const SelectorSubclause = ({
  selector,
  onChange: handleChange,
  suggestions,
}: SelectorSubclauseProps) => {
  if (!selector) {
    return (
      <SuggestionWord
        suggestions={suggestions.map((suggestion) => ({
          ...suggestion,
          key: suggestion.type,
        }))}
        renderSuggestion={(suggestion) => suggestion.displayName}
        onSuggestionSelect={handleChange}
      >
        Get...
      </SuggestionWord>
    );
  }

  return (
    <>
      <SuggestionWord
        suggestions={suggestions.map((suggestion) => ({
          ...suggestion,
          key: suggestion.type,
        }))}
        renderSuggestion={(suggestion) => suggestion.displayName}
        onSuggestionSelect={handleChange}
      >
        Get
      </SuggestionWord>
      {renderSubclause(selector, handleChange)}
      <Word>Tracks</Word>
    </>
  );
};

export default SelectorSubclause;
