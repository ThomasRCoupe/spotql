import { ClauseType, SelectorDraft, SourceDraft } from "../types";

const getSelectorVariants = (): SelectorDraft[] => [
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

const getSourceVariants = (): SourceDraft[] => [
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
