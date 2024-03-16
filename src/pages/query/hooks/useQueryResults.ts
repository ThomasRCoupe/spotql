import { useEffect, useState } from "react";
import { Track } from "../../../spotify/types";
import { executeShuffled } from "../clauses/orderers/shuffled/execution";
import { executeGetAll } from "../clauses/selectors/get-all/execution";
import { executeGetTop } from "../clauses/selectors/get-top/execution";
import { Orderer, Query, Selector } from "../types";
import useSourceTracks from "./useSourceTracks";

const executeSelector = (selector: Selector, tracks: Track[]) => {
  switch (selector.variant) {
    case "get-all":
      return executeGetAll(selector, tracks);
    case "get-top":
      return executeGetTop(selector, tracks);
  }
};

const executeOrderer = (orderer: Orderer, tracks: Track[]) => {
  switch (orderer.variant) {
    case "shuffled":
      return executeShuffled(orderer, tracks);
  }
};

const useQueryResults = () => {
  const [query, setQuery] = useState<Query>();
  const [tracks, setTracks] = useState<Track[]>();

  const runQuery = (newQuery: Query) => {
    setQuery(newQuery);
  };

  const { tracks: sourceTracks, isLoading } = useSourceTracks(query?.sources);

  useEffect(() => {
    const orderedTracks =
      query?.orderer && sourceTracks
        ? executeOrderer(query.orderer, sourceTracks)
        : tracks;

    const selectedTracks =
      query && orderedTracks
        ? executeSelector(query.selector, orderedTracks)
        : orderedTracks;

    setTracks(selectedTracks);
  }, [query, isLoading]);

  return { tracks, isLoading, runQuery };
};

export default useQueryResults;
