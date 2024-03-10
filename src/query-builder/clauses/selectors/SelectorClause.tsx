import { GetAllClause } from "./get-all/GetAllClause";
import { GetTopClause } from "./get-top/GetTopClause";
import { Selector } from "../../types";

interface SelectorClauseProps {
  selector: Selector;
  onChange: (selector: Selector) => void;
  onClick: () => void;
}

export const SelectorClause = ({
  selector,
  onChange: handleChange,
  onClick: handleClick,
}: SelectorClauseProps) => {
  switch (selector.variant) {
    case "get-all":
      return <GetAllClause onClick={handleClick} />;
    case "get-top":
      return (
        <GetTopClause
          amount={selector.amount}
          onAmountChange={(amount) => handleChange({ ...selector, amount })}
          onClick={handleClick}
        />
      );
  }
};
