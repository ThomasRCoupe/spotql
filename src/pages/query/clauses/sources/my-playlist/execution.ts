import { Track } from "../../../../../spotify/types";
import { MyPlaylistSource } from "./types";

export const fetchMyPlaylistTracks = async (
  token: string,
  market: string,
  source: MyPlaylistSource
) => fetchPlaylistTracks(token, market, source.playlistId);

const fetchPlaylistTracks = async (
  token: string,
  market: string,
  playlistId: string
) => {
  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}?market=${market}&fields=tracks.items.track(id,name,artists(id,name),album(id,name,images))`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch playlists");
  }

  return (await response.json()).tracks.items.map(
    (item: { track: Track }) => item.track
  ) as Track[];
};
