import { ClauseType, Selector } from "./types";

const getSelectorVariants = (): Selector[] => [
  { type: "selector", variant: "getAll" },
  { type: "selector", variant: "getTop" },
];

export const getVariants = (type: ClauseType) => {
  switch (type) {
    case "selector":
      return getSelectorVariants();
  }
};
