export const getAccessToken = async () => {
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
