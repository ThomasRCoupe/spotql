import { useReducer } from "react";
import { ClauseDraft, SelectorDraft } from "../../types";

interface SelectorChangeAction {
  type: "selector-change";
  selector: SelectorDraft;
}

export type QueryAction = SelectorChangeAction;

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
  }
};

export const useClauseReducer = () =>
  useReducer(reduceQueryDraft, {
    type: "from-my-playlist",
    displayName: "From My Playlist",
  });
