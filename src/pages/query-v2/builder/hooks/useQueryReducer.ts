import { useReducer } from "react";
import { QueryDraft, SelectorDraft, SourceDraft } from "../../types";

interface SelectorChangeAction {
  type: "selector-change";
  selector: SelectorDraft;
  index: number;
}

interface SourceChangeAction {
  type: "source-change";
  source: SourceDraft;
  index: number;
}

export type QueryAction = SelectorChangeAction | SourceChangeAction;

const reduceQuery = (state: QueryDraft, action: QueryAction): QueryDraft => {
  switch (action.type) {
    case "selector-change":
      return {
        ...state,
        clauses: [
          ...state.clauses.splice(0, action.index),
          {
            ...state.clauses[action.index],
            ...{ selector: action.selector },
          },
        ],
      };
    case "source-change":
      return {
        ...state,
        clauses: [
          ...state.clauses.splice(0, action.index),
          {
            ...state.clauses[action.index],
            ...{ source: action.source },
          },
        ],
      };
  }
};

export const useQueryReducer = () => useReducer(reduceQuery, { clauses: [{}] });
