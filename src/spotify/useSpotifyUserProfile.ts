import { useEffect, useState } from "react";
import { useSpotifyUserAccessToken } from "./useSpotifyUserAccessToken";
import { FetchState as FetchStatus } from "../types";
import { SpotifyUserProfile } from "./types";

export const useSpotifyUserProfile = () => {
  const { token, status: tokenStatus } = useSpotifyUserAccessToken();
  const [status, setStatus] = useState<FetchStatus>("fetching");
  const [profile, setProfile] = useState<SpotifyUserProfile>();

  useEffect(() => {
    if (tokenStatus !== "success" && tokenStatus !== status) {
      setStatus(tokenStatus);
      return;
    }

    if (tokenStatus !== "success") {
      return;
    }

    if (!token) {
      setStatus("failed");
      return;
    }

    const getAndSetSpotifyUserProfile = async () => {
      const profile = await fetchSpotifyUserProfile(token);

      setProfile(profile as SpotifyUserProfile);
    };

    void getAndSetSpotifyUserProfile();
  }, [token, tokenStatus, status]);

  return [profile, status];
};

const fetchSpotifyUserProfile = async (token: string) => {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return await result.json();
};
