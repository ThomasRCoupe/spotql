import { useState } from "react";
import InputWord from "./InputWord";
import SuggestionWord from "./SuggestionWord";

const selectorSuggestions = ["Get All", "Get Random"];
const sourceSuggestions = ["From My Playlist", "Get Random"];

const ClauseWords = () => {
  const [quantity, setQuantity] = useState("");

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
      <InputWord
        value={quantity}
        onChange={setQuantity}
        placeholder="Quantity: number"
      />
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
