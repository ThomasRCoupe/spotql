import { useQueries } from "@tanstack/react-query";
import { Source } from "./types";
import { fetchMyPlaylistTracks } from "./clauses/sources/my-playlist/execution";
import { Track } from "../../spotify/types";

const fetchSourceTracks = async (
  token: string,
  market: string,
  source: Source
) => {
  switch (source.variant) {
    case "my-playlist":
      return fetchMyPlaylistTracks(token, market, source);
  }
};

const useSourceTracks = (
  token: string | undefined,
  market: string | undefined,
  sources: Source[] | undefined
) => {
  const sourceQueries = useQueries({
    queries:
      sources && token && market
        ? sources.map((source, index) => ({
            queryKey: ["sourceTracks", index],
            queryFn: () => fetchSourceTracks(token, market, source),
          }))
        : [],
  });

  const isLoading = sourceQueries.some((query) => query.isLoading);
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
