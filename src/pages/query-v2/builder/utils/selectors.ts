import { ClauseDraft, SelectorDraft } from "../../types";
import { createGetAllTracksSelector } from "../selectors/get-all-tracks/types";
import { createGetRandomTracksSelector } from "../selectors/get-random-tracks/types";

export const getSelectors = (clause: ClauseDraft): SelectorDraft[] => {
  switch (clause.source.type) {
    case "from-my-playlist":
      return [createGetAllTracksSelector(), createGetRandomTracksSelector()];
  }
};
