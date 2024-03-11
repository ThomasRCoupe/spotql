import { Track } from "../../spotify/types";
import { useCurrentUser } from "../../spotify/useCurrentUser";
import { useSpotifyUserAccessToken } from "../../spotify/useSpotifyUserAccessToken";
import { executeGetAll } from "./clauses/selectors/get-all/execution";
import { executeGetTop } from "./clauses/selectors/get-top/execution";
import { Query, Selector } from "./types";
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
  const { token } = useSpotifyUserAccessToken();
  const { user } = useCurrentUser();
  const { tracks, isLoading } = useSourceTracks(
    token,
    user?.country,
    query?.sources
  );

  const selectedTracks = executeSelector(query.selector, tracks);

  return { tracks: selectedTracks, isLoading };
};

export default useQueryResults;
