import { useReducer } from "react";
import { Clause, Query, Selector, Source } from "./types";

interface SelectorChangeAction {
  type: "selector-change";
  selector: Selector;
}

interface SourceChangeAction {
  type: "source-change";
  source: Source;
  index: number;
}
interface SourceAddAction {
  type: "source-add";
  source: Source;
}

export type QueryAction =
  | SelectorChangeAction
  | SourceChangeAction
  | SourceAddAction;

const deselectClause = (clause: Clause): Clause => ({
  ...clause,
  selected: false,
});

const deselectQuery = (query: Query): Query => ({
  selector: query.selector && (deselectClause(query.selector) as Selector),
  sources: [...query.sources.map((source) => deselectClause(source) as Source)],
});

const reduceQuery = (state: Query, action: QueryAction): Query => {
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

export const useQueryReducer = (initialQuery: Query) =>
  useReducer(reduceQuery, initialQuery);
