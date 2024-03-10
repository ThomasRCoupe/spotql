import { ClauseType, Selector } from "./types";

const getSelectorVariants = (): Selector[] => [
  { type: "selector", variant: "get-all", displayName: "Get All" },
  { type: "selector", variant: "get-top", displayName: "Get Top" },
];

export const getVariants = (type: ClauseType) => {
  switch (type) {
    case "selector":
      return getSelectorVariants();
  }
};
