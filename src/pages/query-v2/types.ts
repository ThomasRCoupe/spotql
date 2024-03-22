export type ClauseDraft = FromMyPlaylistDraft;

export type SelectorDraft = GetAllSelectorDraft | GetRandomSelectorDraft;

export interface GetAllSelectorDraft {
  type: "get-all";
  displayName: "Get All Tracks";
}

export interface GetRandomSelectorDraft {
  type: "get-random";
  displayName: "Get (Quantity: number) Random Tracks";
  quantity?: number;
}

export interface FromMyPlaylistDraft {
  selector: GetAllSelectorDraft | GetRandomSelectorDraft | undefined;
  displayName: "From My Playlist (Playlist Name: string)";
  playlistName?: string;
  playlistId?: string;
}
