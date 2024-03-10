import { SpotifyUserProfile } from "./types";
import { useSpotifyUserAccessTokenV2 } from "./useSpotifyUserAccessToken";
import { useQuery } from "@tanstack/react-query";

export const useSpotifyUserProfile = () => {
  const { token, refetch: refetchToken } = useSpotifyUserAccessTokenV2();

  const { data, status } = useQuery({
    queryKey: ["spotifyUserProfile"],
    queryFn: () => (token ? fetchSpotifyUserProfile(token) : undefined),
    enabled: !!token,
  });

  console.log("profile", data);

  return {
    profile: data,
    status,
    refetchToken,
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

  return (await response.json()) as SpotifyUserProfile;
};
