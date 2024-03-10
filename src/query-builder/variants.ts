import { ClauseType, Selector, Source } from "./types";

const getSelectorVariants = (): Selector[] => [
  {
    type: "selector",
    variant: "get-all",
    displayName: "Get All",
    selected: false,
  },
  {
    type: "selector",
    variant: "get-top",
    displayName: "Get Top",
    selected: false,
  },
];

const getSourceVariants = (): Source[] => [
  {
    type: "source",
    variant: "my-playlist",
    displayName: "My Playlist",
    selected: false,
  },
];

export const getVariants = (type: ClauseType) => {
  switch (type) {
    case "selector":
      return getSelectorVariants();
    case "source":
      return getSourceVariants();
  }
};
