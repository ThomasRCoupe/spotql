import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export type FetchState = "fetching" | "failed" | "success";

export const useSpotifyAccessToken = () => {
  const [fetchStatus, setFetchStatus] = useState<FetchState>("fetching");
  const [accessToken, setAccessToken] = useState<string>();

  useEffect(() => {
    const storedToken = Cookies.get("spotifyAccessToken");

    if (storedToken) {
      setFetchStatus("success");
      setAccessToken(storedToken);
      return;
    }

    const getAndSetAccessToken = async () => {
      const response = await fetchAccessToken();
      if (!response.ok) {
        setFetchStatus("failed");
        return;
      }

      const token = await response.json();

      Cookies.set("spotifyAccessToken", token.access_token, {
        expires: token.expires_in,
      });

      setFetchStatus("success");
      setAccessToken(token.access_token);
    };

    void getAndSetAccessToken();
  }, []);

  return {
    status: fetchStatus,
    accessToken: accessToken,
  };
};

const fetchAccessToken = async () => {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

  const options = {
    method: "POST",
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  };

  return await fetch("https://accounts.spotify.com/api/token", options);
};
