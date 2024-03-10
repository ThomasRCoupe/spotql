import { SelectorClause } from "./clauses/SelectorClause";
import { Clause, ClauseType } from "./types";

interface ClauseSwitchProps {
  type: ClauseType;
  clause?: Clause;
  onChange: (clause: Clause) => void;
  onClick: () => void;
}

const ClauseSwitch = ({
  type,
  clause,
  onChange: handleChange,
  onClick: handleClick,
}: ClauseSwitchProps) => {
  switch (type) {
    case "selector":
      return (
        <SelectorClause
          selector={clause}
          onChange={handleChange}
          onClick={handleClick}
        />
      );
  }
};

export default ClauseSwitch;
