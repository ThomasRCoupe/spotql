export interface GetTopSelectorDraft {
  type: "selector";
  variant: "get-top";
  displayName: "Get Top";
  selected: boolean;
  amount?: number;
}

export interface GetTopSelector {
  type: "selector";
  variant: "get-top";
  amount: number;
}
