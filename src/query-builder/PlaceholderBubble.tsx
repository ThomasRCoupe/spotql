import VariantBubble from "./VariantBubble";
import { Clause, ClauseType } from "./types";
import { firstLetterToUpperCase } from "../utils/capitalisation";

interface PlaceholderBubbleProps {
  type: ClauseType;
  onChange: (clause: Clause) => void;
  selected: boolean;
  onSelectedChange: (selected: boolean) => void;
}

const PlaceholderBubble = ({
  type,
  onChange: handleChange,
  selected,
  onSelectedChange: handleSelectedChange,
}: PlaceholderBubbleProps) => {
  return (
    <VariantBubble
      type={type}
      variant="inverted"
      selected={selected}
      onSelectedChange={(newSelected) => handleSelectedChange(newSelected)}
      onChange={handleChange}
    >
      {firstLetterToUpperCase(type)}
    </VariantBubble>
  );
};

export default PlaceholderBubble;
