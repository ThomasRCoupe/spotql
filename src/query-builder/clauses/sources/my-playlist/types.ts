export interface MyPlaylistSource {
  type: "source";
  variant: "my-playlist";
  displayName: "My Playlist";
  selected: boolean;
  playlistName?: string;
}
