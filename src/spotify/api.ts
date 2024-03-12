import { SimplifiedPlaylist, Track } from "./types";
import { AuthenticatedFetch } from "./useAuthenticatedFetch";

export const fetchMyPlaylists = async (
  authenticatedFetch: AuthenticatedFetch,
  limit: number,
  offset: number
) => {
  const response = await authenticatedFetch(
    `https://api.spotify.com/v1/me/playlists?limit=${limit}&offset=${offset}`,
    "GET"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch playlists");
  }

  return (await response.json()).items as SimplifiedPlaylist[];
};

export const fetchPlaylistTracks = async (
  authenticatedFetch: AuthenticatedFetch,
  market: string,
  playlistId: string
) => {
  const response = await authenticatedFetch(
    `https://api.spotify.com/v1/playlists/${playlistId}?market=${market}&fields=tracks.items.track(id,name,artists(id,name),album(id,name,images))`,
    "GET"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch playlists");
  }

  return (await response.json()).tracks.items.map(
    (item: { track: Track }) => item.track
  ) as Track[];
};
