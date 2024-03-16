import { useReducer } from "react";
import {
  ClauseDraft,
  OrdererDraft,
  QueryDraft,
  SelectorDraft,
  SourceDraft,
} from "../types";

interface SelectorChangeAction {
  type: "selector-change";
  selector: SelectorDraft;
}

interface OrdererChangeAction {
  type: "orderer-change";
  orderer: OrdererDraft;
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
  | OrdererChangeAction
  | SourceChangeAction
  | SourceAddAction;

const deselectClause = (clause: ClauseDraft): ClauseDraft => ({
  ...clause,
  selected: false,
});

const deselectQuery = (query: QueryDraft): QueryDraft => ({
  selector: query.selector && (deselectClause(query.selector) as SelectorDraft),
  orderer: query.orderer && (deselectClause(query.orderer) as OrdererDraft),
  sources: [
    ...query.sources.map((source) => deselectClause(source) as SourceDraft),
  ],
});

const reduceQueryDraft = (
  state: QueryDraft,
  action: QueryAction
): QueryDraft => {
  switch (action.type) {
    case "selector-change":
      return {
        ...(action.selector.selected ? deselectQuery(state) : state),
        ...{ selector: action.selector },
      };
    case "orderer-change":
      return {
        ...(action.orderer.selected ? deselectQuery(state) : state),
        ...{ orderer: action.orderer },
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

export const useQueryDraftReducer = () =>
  useReducer(reduceQueryDraft, { sources: [] });
