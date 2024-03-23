import { GetAllTracksSelectorDraft } from "./builder/selectors/get-all-tracks/types";
import { GetRandomTracksSelectorDraft } from "./builder/selectors/get-random-tracks/types";

export type ClauseDraft = FromMyPlaylistDraft;

export type SelectorDraft =
  | GetAllTracksSelectorDraft
  | GetRandomTracksSelectorDraft;

export interface FromMyPlaylistDraft {
  type: "from-my-playlist";
  selector?: GetAllTracksSelectorDraft | GetRandomTracksSelectorDraft;
  displayName: "From My Playlist";
  playlistName?: string;
  playlistId?: string;
}
