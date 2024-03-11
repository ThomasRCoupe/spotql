import { GetTopSelector } from "./types";

export const isGetTopSelectorValid = (clause: GetTopSelector) =>
  !!clause.amount;
