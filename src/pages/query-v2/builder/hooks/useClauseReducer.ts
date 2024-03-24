import { useReducer } from "react";
import { ClauseDraft, SelectorDraft, SourceDraft } from "../../types";

interface SelectorChangeAction {
  type: "selector-change";
  selector: SelectorDraft;
}

interface SourceChangeAction {
  type: "source-change";
  source: SourceDraft;
}

export type QueryAction = SelectorChangeAction | SourceChangeAction;

const reduceQueryDraft = (
  state: ClauseDraft,
  action: QueryAction
): ClauseDraft => {
  switch (action.type) {
    case "selector-change":
      return {
        ...state,
        ...{ selector: action.selector },
      };
    case "source-change":
      return {
        ...state,
        ...{ source: action.source },
      };
  }
};

export const useClauseReducer = () => useReducer(reduceQueryDraft, {});
