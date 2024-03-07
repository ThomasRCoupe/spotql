import { useEffect, useState } from "react";
import { getAccessToken } from "./spotify/auth";
import Cookies from "js-cookie";

const App = () => {
  const [accessToken, setAccessToken] = useState<string>();

  useEffect(() => {
    const storedToken = Cookies.get("spotifyAccessToken");

    if (storedToken) {
      console.log("Retrieved stored cookie!");
      setAccessToken(storedToken);
      return;
    }

    const getAndSetAccessToken = async () => {
      const response = await getAccessToken();
      if (!response.ok) {
        return;
      }

      const token = await response.json();

      Cookies.set("spotifyAccessToken", token.access_token, {
        expires: token.expires_in,
      });

      setAccessToken(token.access_token);
    };

    void getAndSetAccessToken();
  });

  return (
    <>
      <h1 className="text-3xl font-bold underline">spotql</h1>
      <p>Client ID: {import.meta.env.VITE_SPOTIFY_CLIENT_ID}</p>
      <p>Client Secret: {import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}</p>
      <p>Access Token: {accessToken}</p>
    </>
  );
};

export default App;
