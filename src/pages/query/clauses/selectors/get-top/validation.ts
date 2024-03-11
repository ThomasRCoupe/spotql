import { GetTopSelectorDraft } from "./types";

export const isGetTopSelectorValid = (clause: GetTopSelectorDraft) =>
  !!clause.amount;
