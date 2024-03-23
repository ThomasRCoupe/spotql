import { ClauseDraft, SelectorDraft } from "../types";
import SelectorSubclause from "./selectors/SelectorSubclause";
import { getSelectors } from "./utils/selectors";

interface QueryClauseProps {
  clause: ClauseDraft | undefined;
  onSelectorChange: (selector: SelectorDraft) => void;
}

const QueryClause = ({
  clause,
  onSelectorChange: handleSelectorChange,
}: QueryClauseProps) => {
  return (
    <div className="flex">
      <SelectorSubclause
        selector={clause?.selector}
        onChange={handleSelectorChange}
        suggestions={clause ? getSelectors(clause) : []}
      />
    </div>
  );
};

export default QueryClause;
