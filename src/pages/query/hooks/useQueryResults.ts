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

const useQueryResults = (query: Query) => {
  const { tracks, isLoading } = useSourceTracks(query?.sources);

  const ordererTracks = query.orderer
    ? executeOrderer(query.orderer, tracks)
    : tracks;

  const selectedTracks = executeSelector(query.selector, ordererTracks);

  return { tracks: selectedTracks, isLoading };
};

export default useQueryResults;
