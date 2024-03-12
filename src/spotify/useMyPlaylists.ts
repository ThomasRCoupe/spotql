import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import useAuthenticatedFetch from "./useAuthenticatedFetch";
import { fetchMyPlaylists } from "./api";

export const useMyPlaylists = () => {
  const authenticatedFetch = useAuthenticatedFetch();

  const { data, fetchNextPage, hasNextPage, isFetching, status } =
    useInfiniteQuery({
      queryKey: ["myPlaylists"],
      queryFn: ({ pageParam }) =>
        authenticatedFetch
          ? fetchMyPlaylists(authenticatedFetch, 50, pageParam * 50)
          : Promise.resolve([]),
      initialPageParam: 0,
      getNextPageParam: (lastPage, pages) =>
        lastPage?.length === 50 ? pages.length + 1 : undefined,
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
