import { SelectorClause } from "./clauses/selectors/SelectorClause";
import { SourceClause } from "./clauses/sources/SourceClause";
import { Clause } from "./types";

interface ClauseSwitchProps {
  clause: Clause;
  onChange: (clause: Clause) => void;
  onClick: () => void;
}

const ClauseSwitch = ({
  clause,
  onChange: handleChange,
  onClick: handleClick,
}: ClauseSwitchProps) => {
  switch (clause.type) {
    case "selector":
      return (
        <SelectorClause
          selector={clause}
          onChange={handleChange}
          onClick={handleClick}
        />
      );
    case "source":
      return (
        <SourceClause
          source={clause}
          onChange={handleChange}
          onClick={handleClick}
        />
      );
  }
};

export default ClauseSwitch;
