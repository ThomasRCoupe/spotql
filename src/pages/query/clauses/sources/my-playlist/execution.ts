import { fetchPlaylistTracks } from "../../../../../spotify/api";
import { AuthenticatedFetch } from "../../../../../spotify/hooks/useAuthenticatedFetch";
import { MyPlaylistSource } from "./types";

export const fetchMyPlaylistTracks = async (
  authenticatedFetch: AuthenticatedFetch,
  market: string,
  source: MyPlaylistSource
) => fetchPlaylistTracks(authenticatedFetch, market, source.playlistId);
