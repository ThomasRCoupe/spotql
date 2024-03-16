import VariantBubble from "./VariantBubble";
import { ClauseDraft, ClauseType } from "../types";
import { firstLetterToUpperCase } from "../../../utils/capitalisation";
import { useState } from "react";

interface PlaceholderBubbleProps {
  type: ClauseType;
  onChange: (clause: ClauseDraft) => void;
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
      onChange={(clause: ClauseDraft) => {
        handleChange(clause);
        setSelected(false);
      }}
    >
      {`${firstLetterToUpperCase(type)}...`}
    </VariantBubble>
  );
};

export default PlaceholderBubble;
