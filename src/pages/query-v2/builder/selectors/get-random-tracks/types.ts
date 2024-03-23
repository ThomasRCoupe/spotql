export interface GetRandomTracksSelectorDraft {
  type: "get-random-tracks";
  displayName: "Get Random Tracks";
  quantity?: number;
}

export const createGetRandomTracksSelector =
  (): GetRandomTracksSelectorDraft => ({
    type: "get-random-tracks",
    displayName: "Get Random Tracks",
  });
