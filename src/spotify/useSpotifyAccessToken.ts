import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { FetchState } from "../types";

export const useSpotifyAccessToken = () => {
  const [status, setStatus] = useState<FetchState>("fetching");
  const [token, setToken] = useState<string>();

  useEffect(() => {
    const storedToken = Cookies.get("spotifyAccessToken");

    if (storedToken) {
      setStatus("success");
      setToken(storedToken);
      return;
    }

    const getAndSetAccessToken = async () => {
      const response = await fetchAccessToken();
      if (!response.ok) {
        setStatus("failed");
        return;
      }

      const token = await response.json();

      Cookies.set("spotifyAccessToken", token.access_token, {
        expires: token.expires_in,
      });

      setStatus("success");
      setToken(token.access_token);
    };

    void getAndSetAccessToken();
  }, []);

  return {
    token,
    status,
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
