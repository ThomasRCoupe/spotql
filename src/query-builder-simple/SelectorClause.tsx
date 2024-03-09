import { Clause } from "../design-system/Clause";
import { Selector } from "./types";

interface SelectorClauseProps {
  selector?: Selector;
}

export const SelectorClause = ({ selector }: SelectorClauseProps) => {
  if (!selector) {
    return <Clause></Clause>;
  }
};
