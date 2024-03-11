import { User } from "./types";
import { useSpotifyUserAccessToken } from "./useSpotifyUserAccessToken";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  const { token, clearToken } = useSpotifyUserAccessToken();

  const { data, status } = useQuery({
    queryKey: ["spotifyUserProfile"],
    queryFn: () => (token ? fetchSpotifyUserProfile(token) : undefined),
    enabled: !!token,
  });

  return {
    user: data,
    status,
    clearToken,
  };
};

const fetchSpotifyUserProfile = async (token: string) => {
  const response = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await response.json()) as User;
};
