export interface MyPlaylistSourceDraft {
  type: "source";
  variant: "my-playlist";
  displayName: "My Playlist";
  selected: boolean;
  playlistName?: string;
  playlistId?: string;
}

export interface MyPlaylistSource {
  type: "source";
  variant: "my-playlist";
  playlistId: string;
}
