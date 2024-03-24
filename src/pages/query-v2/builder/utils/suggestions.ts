import { ClauseDraft, SelectorDraft, SourceDraft } from "../../types";
import { createGetAllTracksSelector } from "../selectors/get-all-tracks/types";
import { createGetRandomTracksSelector } from "../selectors/get-random-tracks/types";
import { createFromMyPlaylistsSource } from "../sources/from-my-playlist/types";

export const getSelectors = (clause: ClauseDraft): SelectorDraft[] => {
  switch (clause.source.type) {
    case "from-my-playlist":
      return [createGetAllTracksSelector(), createGetRandomTracksSelector()];
  }
};

export const getSources = (): SourceDraft[] => {
  return [createFromMyPlaylistsSource()];
};
