import { useSpotifyAccessToken } from "../spotify/useSpotifyAccessToken";

export const SecretPage = () => {
  const { token, status } = useSpotifyAccessToken();

  return (
    <div className="w-full h-full">
      <h1 className="text-3xl font-bold">SpotQL</h1>
      <p>Client ID: {import.meta.env.VITE_SPOTIFY_CLIENT_ID}</p>
      <p>Client Secret: {import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}</p>
      <p>Access Token: {token ?? status}</p>
    </div>
  );
};
