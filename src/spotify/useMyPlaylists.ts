import { useInfiniteQuery } from "@tanstack/react-query";
import { useSpotifyUserAccessToken } from "./useSpotifyUserAccessToken";
import { SimplifiedPlaylist } from "./types";
import { useEffect } from "react";

export const useMyPlaylists = () => {
  const { token } = useSpotifyUserAccessToken();

  const { data, fetchNextPage, hasNextPage, isFetching, status } =
    useInfiniteQuery({
      queryKey: ["myPlaylists"],
      queryFn: token
        ? ({ pageParam }) => fetchMyPlaylistsPage(token, pageParam)
        : undefined,
      initialPageParam: 0,
      getNextPageParam: (lastPage, pages) =>
        lastPage.length === 50 ? pages.length + 1 : undefined,
    });

  useEffect(() => {
    if (status !== "error" && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetching, status]);

  const allPageFetchStatus =
    hasNextPage && status !== "error" ? "pending" : status;

  return {
    playlists: data?.pages?.flatMap((page) => page),
    status: allPageFetchStatus,
  };
};

const fetchMyPlaylistsPage = async (token: string, page: number) => {
  const response = await fetch(
    `https://api.spotify.com/v1/me/playlists?limit=50&offset=${page * 50}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch playlists");
  }

  return (await response.json()).items as SimplifiedPlaylist[];
};
