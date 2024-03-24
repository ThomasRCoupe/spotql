import { ClauseDraft, SelectorDraft, SourceDraft } from "../types";
import SelectorSubclause from "./selectors/SelectorSubclause";
import SourceSubclause from "./sources/SourceSubclause";
import { getSelectors, getSources } from "./utils/suggestions";

interface QueryClauseProps {
  clause: ClauseDraft;
  onSelectorChange: (selector: SelectorDraft) => void;
  onSourceChange: (selector: SourceDraft) => void;
}

const QueryClause = ({
  clause,
  onSelectorChange: handleSelectorChange,
  onSourceChange: handleSourceChange,
}: QueryClauseProps) => {
  return (
    <div className="flex">
      <SelectorSubclause
        selector={clause.selector}
        onChange={handleSelectorChange}
        suggestions={clause?.source ? getSelectors(clause) : []}
      />
      <SourceSubclause
        source={clause.source}
        onChange={handleSourceChange}
        suggestions={getSources()}
      />
    </div>
  );
};

export default QueryClause;
