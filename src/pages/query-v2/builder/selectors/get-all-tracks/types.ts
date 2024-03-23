export interface GetAllTracksSelectorDraft {
  type: "get-all-tracks";
  displayName: "Get All Tracks";
}

export const createGetAllTracksSelector = (): GetAllTracksSelectorDraft => ({
  type: "get-all-tracks",
  displayName: "Get All Tracks",
});
