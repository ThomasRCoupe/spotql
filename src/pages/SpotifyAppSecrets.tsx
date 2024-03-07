import { useSpotifyAccessToken } from "../spotify/useSpotifyAccessToken";

export const SpotifyAppSecrets = () => {
  const { accessToken, status } = useSpotifyAccessToken();

  return (
    <div>
      <h1 className="text-3xl font-bold">SpotQL</h1>
      <p>Client ID: {import.meta.env.VITE_SPOTIFY_CLIENT_ID}</p>
      <p>Client Secret: {import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}</p>
      <p>Access Token: {accessToken ?? status}</p>
    </div>
  );
};
