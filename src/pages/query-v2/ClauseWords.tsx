import SuggestionWord from "./SuggestionWord";
import { ClauseDraft } from "./types";

interface ClauseWordsProps {
  clause: ClauseDraft;
}

const selectorSuggestions = ["Get All", "Get Random"];

const ClauseWords = () => {
  return (
    <>
      <SuggestionWord
        suggestions={selectorSuggestions.map((suggestion) => ({
          name: suggestion,
          key: suggestion,
        }))}
        renderSuggestion={(suggestion) => suggestion.name}
        onSuggestionSelect={(suggestion) =>
          console.log("suggestion selected", suggestion)
        }
      >
        Get
      </SuggestionWord>
    </>
  );
};

export default ClauseWords;
