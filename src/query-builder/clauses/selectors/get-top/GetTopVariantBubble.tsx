import VariantBubble from "../../../VariantBubble";
import { Selector } from "../../../types";

interface GetTopVariantBubbleProps {
  selected: boolean;
  onSelectedChange: (selected: boolean) => void;
  onChange: (selector: Selector) => void;
}

const GetTopVariantBubble = ({
  selected,
  onSelectedChange: handleSelectedChange,
  onChange: handleChange,
}: GetTopVariantBubbleProps) => (
  <VariantBubble
    type="selector"
    variant="primary"
    selected={selected}
    onSelectedChange={handleSelectedChange}
    onChange={(newSelector) => handleChange(newSelector as Selector)}
  >
    Get Top
  </VariantBubble>
);

export default GetTopVariantBubble;
