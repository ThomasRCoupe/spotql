import { fetchPlaylistTracks } from "../../../../../spotify/api";
import { Track } from "../../../../../spotify/types";
import { AuthenticatedFetch } from "../../../../../spotify/useAuthenticatedFetch";
import { MyPlaylistSource } from "./types";

export const fetchMyPlaylistTracks = async (
  authenticatedFetch: AuthenticatedFetch,
  market: string,
  source: MyPlaylistSource
) => fetchPlaylistTracks(authenticatedFetch, market, source.playlistId);
