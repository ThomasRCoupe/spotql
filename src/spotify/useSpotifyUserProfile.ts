import { useEffect, useState } from "react";
import { useSpotifyUserAccessToken } from "./useSpotifyUserAccessToken";
import { FetchState as FetchStatus } from "../types";
import { SpotifyUserProfile } from "./types";

export const useSpotifyUserProfile = () => {
  const {
    token,
    status: tokenStatus,
    clearToken,
  } = useSpotifyUserAccessToken();
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
      try {
        const response = await fetchSpotifyUserProfile(token);
        if (!response.ok && response.status === 401) {
          clearToken();
        }
        if (!response.ok) {
          setStatus("failed");
          return;
        }

        const profile = await response.json();

        setProfile(profile as SpotifyUserProfile);
        setStatus("success");
      } catch {
        setStatus("failed");
      }
    };

    void getAndSetSpotifyUserProfile();
  }, [tokenStatus]);

  return { profile, status, clearToken };
};

const fetchSpotifyUserProfile = async (token: string) => {
  return await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
};
