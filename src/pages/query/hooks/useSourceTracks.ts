import { useQueries } from "@tanstack/react-query";
import { Source } from "../types";
import { fetchMyPlaylistTracks } from "../clauses/sources/my-playlist/execution";
import { Track } from "../../../spotify/types";
import { useCurrentUser } from "../../../spotify/hooks/useCurrentUser";
import useAuthenticatedFetch, {
  AuthenticatedFetch,
} from "../../../spotify/hooks/useAuthenticatedFetch";

const getQueryKey = (source: Source, index: number) => {
  const baseKey = ["source-tracks", index, source.variant];

  switch (source.variant) {
    case "my-playlist":
      return [...baseKey, source.playlistId];
  }
};

const fetchSourceTracks = async (
  authenticatedFetch: AuthenticatedFetch,
  market: string,
  source: Source
) => {
  switch (source.variant) {
    case "my-playlist":
      return fetchMyPlaylistTracks(authenticatedFetch, market, source);
  }
};

const useSourceTracks = (sources: Source[] | undefined) => {
  const authenticatedFetch = useAuthenticatedFetch();
  const { user } = useCurrentUser();

  const sourceQueries = useQueries({
    queries:
      sources && authenticatedFetch && user?.country
        ? sources.map((source, index) => ({
            queryKey: getQueryKey(source, index),
            queryFn: () =>
              fetchSourceTracks(authenticatedFetch, user.country, source),
          }))
        : [],
  });

  const isLoading =
    sourceQueries.some((query) => query.isLoading) || sourceQueries.length == 0;
  const hasError = sourceQueries.some((query) => query.error);
  const results = sourceQueries.map((query) => query.data);
  const tracks = results.reduce<Track[]>((a, c) => [...a, ...(c ?? [])], []);

  return {
    tracks,
    isLoading,
    hasError,
  };
};

export default useSourceTracks;
