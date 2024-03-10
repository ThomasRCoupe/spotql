import VariantBubble from "../../../VariantBubble";
import { Selector } from "../../../types";
import { GetAllSelector } from "./types";

export interface GetAllClause {
  selector: GetAllSelector;
  onChange: (selector: Selector) => void;
}

export const GetAll = ({ selector, onChange: handleChange }: GetAllClause) => {
  return (
    <VariantBubble
      type="selector"
      variant="primary"
      onChange={(newSelector) => handleChange(newSelector as Selector)}
      selected={selector.selected}
      onSelectedChange={(newSelected) =>
        handleChange({ ...selector, selected: newSelected })
      }
    >
      Get All
    </VariantBubble>
  );
};
