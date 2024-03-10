import { useState } from "react";
import VariantBubble from "./VariantBubble";
import { Clause, ClauseType } from "./types";
import { firstLetterToUpperCase } from "../utils/capitalisation";

interface PlaceholderBubbleProps {
  type: ClauseType;
  onChange: (clause: Clause) => void;
}

const PlaceholderBubble = ({
  type,
  onChange: handleChange,
}: PlaceholderBubbleProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <VariantBubble
      type={type}
      variant="inverted"
      selected={selected}
      onSelectedChange={(newSelected) => setSelected(newSelected)}
      onChange={handleChange}
    >
      {firstLetterToUpperCase(type)}
    </VariantBubble>
  );
};

export default PlaceholderBubble;
