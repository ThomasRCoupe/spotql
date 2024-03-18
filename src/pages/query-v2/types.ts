export type ClauseDraft = FromMyPlaylistDraft;

export interface GetAllSelectorDraft {
  type: "get-all";
}

export interface GetRandomSelectorDraft {
  type: "get-random";
  quantity?: number;
}

export interface FromMyPlaylistDraft {
  selector: GetAllSelectorDraft | GetRandomSelectorDraft;
  playlistName?: string;
  playlistId?: string;
}
