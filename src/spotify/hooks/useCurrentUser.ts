import { User } from "../types";
import { useQuery } from "@tanstack/react-query";
import useAuthenticatedFetch, {
  AuthenticatedFetch,
} from "./useAuthenticatedFetch";

export const useCurrentUser = () => {
  const authenticatedFetch = useAuthenticatedFetch();

  const { data, status } = useQuery({
    queryKey: ["spotifyUserProfile"],
    queryFn: () =>
      authenticatedFetch
        ? fetchSpotifyUserProfile(authenticatedFetch)
        : undefined,
    enabled: !!authenticatedFetch,
  });

  return {
    user: data,
    status,
  };
};

const fetchSpotifyUserProfile = async (
  authenticatedFetch: AuthenticatedFetch
) => {
  const response = await authenticatedFetch(
    "https://api.spotify.com/v1/me",
    "GET"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await response.json()) as User;
};
