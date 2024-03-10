import { useState } from "react";
import { GetTopSelector } from "./types";
import GetTopClauseBubble from "./GetTopClauseBubble";
import GetTopVariantBubble from "./GetTopVariantBubble";
import GetTopInputBubble from "./GetTopInputBubble";
import { Selector } from "../../../types";

interface GetTopProps {
  selector: GetTopSelector;
  onChange: (selector: Selector) => void;
}

export const MyPlaylist = ({
  selector,
  onChange: handleChange,
}: GetTopProps) => {
  const [editing, setEditing] = useState(false);

  if (!editing) {
    return (
      <GetTopClauseBubble
        amount={selector.amount}
        onClick={() => setEditing(true)}
      />
    );
  }

  return (
    <div className="flex gap-2">
      <GetTopVariantBubble
        onChange={(newSelector) => {
          handleChange(newSelector);
          setEditing(false);
        }}
      />
      <GetTopInputBubble
        amount={selector.amount}
        onAmountChange={(amount) =>
          handleChange({
            ...selector,
            amount,
          })
        }
      />
    </div>
  );
};

export default MyPlaylist;
