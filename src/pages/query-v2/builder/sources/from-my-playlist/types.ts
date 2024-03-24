export interface FromMyPlaylistDraft {
  type: "from-my-playlist";
  displayName: "From My Playlist";
  playlistId?: string;
}

export const createFromMyPlaylistsSource = (): FromMyPlaylistDraft => ({
  type: "from-my-playlist",
  displayName: "From My Playlist",
});
