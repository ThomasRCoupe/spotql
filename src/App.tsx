import { useSpotifyAccessToken } from "./spotify/useSpotifyAccessToken";

const App = () => {
  const { accessToken, status } = useSpotifyAccessToken();

  return (
    <>
      <h1 className="text-3xl font-bold underline">spotql</h1>
      <p>Client ID: {import.meta.env.VITE_SPOTIFY_CLIENT_ID}</p>
      <p>Client Secret: {import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}</p>
      <p>Access Token: {accessToken ?? status}</p>
    </>
  );
};

export default App;
