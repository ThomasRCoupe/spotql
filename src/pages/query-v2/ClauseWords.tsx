import SuggestionWord from "./SuggestionWord";

const selectorSuggestions = ["Get All", "Get Random"];
const sourceSuggestions = ["From My Playlist", "Get Random"];

const ClauseWords = () => {
  return (
    <div className="flex">
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
      <SuggestionWord
        suggestions={sourceSuggestions.map((suggestion) => ({
          name: suggestion,
          key: suggestion,
        }))}
        renderSuggestion={(suggestion) => suggestion.name}
        onSuggestionSelect={(suggestion) =>
          console.log("suggestion selected", suggestion)
        }
      >
        From
      </SuggestionWord>
    </div>
  );
};

export default ClauseWords;
