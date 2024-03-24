import { GetAllTracksSelectorDraft } from "./builder/selectors/get-all-tracks/types";
import { GetRandomTracksSelectorDraft } from "./builder/selectors/get-random-tracks/types";
import { FromMyPlaylistDraft } from "./builder/sources/from-my-playlist/types";

export type SelectorDraft =
  | GetAllTracksSelectorDraft
  | GetRandomTracksSelectorDraft;

export type SourceDraft = FromMyPlaylistDraft;

export interface ClauseDraft {
  source: SourceDraft;
  selector?: SelectorDraft;
}
