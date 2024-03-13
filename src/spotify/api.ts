import { Playlist, SimplifiedPlaylist, Track } from "./types";
import { AuthenticatedFetch } from "./hooks/useAuthenticatedFetch";

export const addTracksToPlaylist = async (
  authenticatedFetch: AuthenticatedFetch,
  playlistId: string,
  trackUris: string[],
  position: number = 0
) => {
  const response = await authenticatedFetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    "POST",
    {
      uris: trackUris,
      position,
    }
  );
  if (!response.ok) {
    throw new Error("Failed to add tracks to playlist");
  }
};

export const createNewPlaylist = async (
  authenticatedFetch: AuthenticatedFetch,
  userId: string,
  name: string,
  description: string
) => {
  const response = await authenticatedFetch(
    `https://api.spotify.com/v1/users/${userId}/playlists`,
    "POST",
    {
      name,
      description,
    }
  );
  if (!response.ok) {
    throw new Error("Failed to create playlist");
  }

  return (await response.json()) as Playlist;
};

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
    `https://api.spotify.com/v1/playlists/${playlistId}?market=${market}&fields=tracks.items.track(id,name,uri,artists(id,name),album(id,name,images))`,
    "GET"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch playlists");
  }

  return (await response.json()).tracks.items.map(
    (item: { track: Track }) => item.track
  ) as Track[];
};
