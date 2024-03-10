import VariantBubble from "../../../VariantBubble";
import { Selector } from "../../../types";

interface GetTopVariantBubbleProps {
  onChange: (selector: Selector) => void;
}

const GetTopVariantBubble = ({
  onChange: handleChange,
}: GetTopVariantBubbleProps) => (
  <VariantBubble
    type="selector"
    variant="primary"
    onChange={(newSelector) => handleChange(newSelector as Selector)}
  >
    Get Top
  </VariantBubble>
);

export default GetTopVariantBubble;
