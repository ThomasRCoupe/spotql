import { useEffect, useState } from "react";
import { useSpotifyUserAccessToken } from "./useSpotifyUserAccessToken";
import { FetchState as FetchStatus } from "../types";

export const useSpotifyUserProfile = () => {
  const { accessToken, status: accessTokenStatus } =
    useSpotifyUserAccessToken();
  const [status, setStatus] = useState<FetchStatus>("fetching");
  const [profile, setProfile] = useState();

  useEffect(() => {
    if (accessTokenStatus !== "success" && accessTokenStatus !== status) {
      setStatus(accessTokenStatus);
      return;
    }

    if (accessTokenStatus !== "success") {
      return;
    }

    if (!accessToken) {
      setStatus("failed");
      return;
    }

    const getAndSetSpotifyUserProfile = async () => {
      const profile = await fetchSpotifyUserProfile(accessToken);

      setProfile(profile);
    };

    void getAndSetSpotifyUserProfile();
  }, [accessToken, accessTokenStatus, status]);

  return [profile, status];
};

const fetchSpotifyUserProfile = async (token: string) => {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return await result.json();
};
