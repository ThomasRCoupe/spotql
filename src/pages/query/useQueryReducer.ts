import { useReducer } from "react";
import { ClauseDraft, QueryDraft, SelectorDraft, SourceDraft } from "./types";

interface SelectorChangeAction {
  type: "selector-change";
  selector: SelectorDraft;
}

interface SourceChangeAction {
  type: "source-change";
  source: SourceDraft;
  index: number;
}
interface SourceAddAction {
  type: "source-add";
  source: SourceDraft;
}

export type QueryAction =
  | SelectorChangeAction
  | SourceChangeAction
  | SourceAddAction;

const deselectClause = (clause: ClauseDraft): ClauseDraft => ({
  ...clause,
  selected: false,
});

const deselectQuery = (query: QueryDraft): QueryDraft => ({
  selector: query.selector && (deselectClause(query.selector) as SelectorDraft),
  sources: [
    ...query.sources.map((source) => deselectClause(source) as SourceDraft),
  ],
});

const reduceQuery = (state: QueryDraft, action: QueryAction): QueryDraft => {
  switch (action.type) {
    case "selector-change":
      return {
        ...(action.selector.selected ? deselectQuery(state) : state),
        ...{ selector: action.selector },
      };
    case "source-add":
      return {
        ...(action.source.selected ? deselectQuery(state) : state),
        sources: [...state.sources, action.source],
      };
    case "source-change":
      return {
        ...(action.source.selected ? deselectQuery(state) : state),
        sources: [
          ...state.sources.slice(0, action.index),
          action.source,
          ...state.sources.slice(action.index + 1),
        ],
      };
  }
};

export const useQueryReducer = (initialQuery: QueryDraft) =>
  useReducer(reduceQuery, initialQuery);
