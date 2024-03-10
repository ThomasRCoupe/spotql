import VariantBubble from "../../../VariantBubble";
import { Selector } from "../../../types";

export interface GetAllClause {
  onChange: (selector: Selector) => void;
}

export const GetAll = ({ onChange: handleChange }: GetAllClause) => (
  <VariantBubble
    type="selector"
    variant="primary"
    onChange={(newSelector) => handleChange(newSelector as Selector)}
  >
    Get All
  </VariantBubble>
);
