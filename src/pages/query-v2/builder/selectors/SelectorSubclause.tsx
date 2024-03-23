import SuggestionWord from "../SuggestionWord";
import Word from "../Word";
import { SelectorDraft } from "../../types";
import GetAllTracks from "./get-all-tracks/GetAllTracks";

interface SelectorWordsProps {
  selector: SelectorDraft | undefined;
  onChange: (selector: SelectorDraft) => void;
  suggestions: SelectorDraft[];
}

const renderSubclause = (selector: SelectorDraft) => {
  switch (selector.type) {
    case "get-all-tracks":
      return <GetAllTracks />;
    case "get-random-tracks":
      return;
  }
};

const SelectorSubclause = ({
  selector,
  onChange: handleChange,
  suggestions,
}: SelectorWordsProps) => {
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
      {renderSubclause(selector)}
      <Word>Tracks</Word>
    </>
  );
};

export default SelectorSubclause;
