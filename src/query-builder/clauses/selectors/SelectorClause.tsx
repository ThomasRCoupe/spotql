import { GetAll } from "./get-all/GetAll";
import { Selector } from "../../types";
import GetTop from "./get-top/GetTop";

interface SelectorClauseProps {
  selector: Selector;
  onChange: (selector: Selector) => void;
}

export const SelectorClause = ({
  selector,
  onChange: handleChange,
}: SelectorClauseProps) => {
  switch (selector.variant) {
    case "get-all":
      return <GetAll selector={selector} onChange={handleChange} />;
    case "get-top":
      return <GetTop clause={selector} onChange={handleChange} />;
  }
};
