import { Clause } from "../design-system/Clause";
import { GetAllClause } from "./clauses/get-all/GetAllClause";
import { GetTopClause } from "./clauses/get-top/GetTopClause";
import { Selector } from "./types";

interface SelectorClauseProps {
  selector?: Selector;
  onChange: (selector: Selector) => void;
}

export const SelectorClause = ({ selector, onChange }: SelectorClauseProps) => {
  if (!selector) {
    return <Clause variant="placeholder">Selector</Clause>;
  }

  switch (selector.type) {
    case "getAll":
      return <GetAllClause />;
    case "getTop":
      return (
        <GetTopClause
          amount={selector.amount}
          onAmountChange={(amount) => onChange({ ...selector, amount })}
        />
      );
  }
};
