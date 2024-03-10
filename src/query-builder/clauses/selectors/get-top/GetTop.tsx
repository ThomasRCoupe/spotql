import { GetTopSelector } from "./types";
import GetTopClauseBubble from "./GetTopClauseBubble";
import GetTopVariantBubble from "./GetTopVariantBubble";
import GetTopInputBubble from "./GetTopInputBubble";
import { Selector } from "../../../types";
import { useState } from "react";

interface GetTopProps {
  selector: GetTopSelector;
  onChange: (selector: Selector) => void;
}

export const MyPlaylist = ({
  selector,
  onChange: handleChange,
}: GetTopProps) => {
  const [inputSelected, setInputSelected] = useState(true);

  if (!selector.selected) {
    return (
      <GetTopClauseBubble
        selected={selector.selected}
        amount={selector.amount}
        onClick={() => handleChange({ ...selector, selected: true })}
      />
    );
  }

  console.log(inputSelected);

  return (
    <div className="flex gap-2">
      <GetTopVariantBubble
        selected={!inputSelected}
        onSelectedChange={(selected) => setInputSelected(!selected)}
        onChange={handleChange}
      />
      <GetTopInputBubble
        selected={inputSelected}
        onSelectedChange={(selected) => setInputSelected(selected)}
        amount={selector.amount}
        onAmountChange={(amount) =>
          handleChange({
            ...selector,
            amount,
          })
        }
        onConfrm={() => handleChange({ ...selector, selected: false })}
      />
    </div>
  );
};

export default MyPlaylist;
