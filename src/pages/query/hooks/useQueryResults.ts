import { Track } from "../../../spotify/types";
import { executeGetAll } from "../clauses/selectors/get-all/execution";
import { executeGetTop } from "../clauses/selectors/get-top/execution";
import { Query, Selector } from "../types";
import useSourceTracks from "./useSourceTracks";

const executeSelector = (selector: Selector, tracks: Track[]) => {
  switch (selector.variant) {
    case "get-all":
      return executeGetAll(selector, tracks);
    case "get-top":
      return executeGetTop(selector, tracks);
  }
};

const useQueryResults = (query: Query) => {
  const { tracks, isLoading } = useSourceTracks(query?.sources);

  const selectedTracks = executeSelector(query.selector, tracks);

  return { tracks: selectedTracks, isLoading };
};

export default useQueryResults;
