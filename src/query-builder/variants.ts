import { ClauseType, Selector, Source } from "./types";

const getSelectorVariants = (): Selector[] => [
  { type: "selector", variant: "get-all", displayName: "Get All" },
  { type: "selector", variant: "get-top", displayName: "Get Top" },
];

const getSourceVariants = (): Source[] => [
  { type: "source", variant: "my-playlist", displayName: "My Playlist" },
];

export const getVariants = (type: ClauseType) => {
  switch (type) {
    case "selector":
      return getSelectorVariants();
    case "source":
      return getSourceVariants();
  }
};
