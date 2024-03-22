import { useState } from "react";
import InputWord from "./InputWord";
import SuggestionWord from "./SuggestionWord";
import { ClauseDraft } from "./types";
import SelectorWords from "./SelectorWords";

const selectorSuggestions = ["Get All", "Get Random"];
const sourceSuggestions = ["From My Playlist", "Get Random"];

interface ClauseWordsProps {
  clause: ClauseDraft | undefined;
}

const ClauseWords = ({ clause }: ClauseWordsProps) => {
  const [quantity, setQuantity] = useState("");

  return (
    <div className="flex">
      <SelectorWords selector={clause?.selector} suggestions={[]} />
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
