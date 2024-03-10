import { useQuery } from "@tanstack/react-query";
import { SpotifyAccessToken } from "./types";

export const useSpotifyUserAccessTokenV2 = () => {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  if (!code) {
    redirectToSpotifyUserAuth(clientId);
  }

  const { data, status, refetch } = useQuery({
    queryKey: ["spotifyUserAccessToken"],
    queryFn: () => (code ? fetchUserAccessToken(clientId, code) : undefined),
    enabled: !!code,
  });

  return {
    token: data?.access_token,
    status,
    refetch,
  };
};

const fetchUserAccessToken = async (clientId: string, code: string) => {
  const verifier = localStorage.getItem("verifier");

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", "http://localhost:5173/profile");
  params.append("code_verifier", verifier!);

  const options = {
    method: "POST",
    body: params,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  };

  const response = await fetch(
    "https://accounts.spotify.com/api/token",
    options
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await response.json()) as SpotifyAccessToken;
};

const redirectToSpotifyUserAuth = async (clientId: string) => {
  const spotifyAuthUrl = await generateSpotifyAuthUrl(clientId);

  window.location.href = spotifyAuthUrl;
};

const generateSpotifyAuthUrl = async (clientId: string) => {
  const verifier = generateCodeVerifier(128);
  const challenge = await generateCodeChallenge(verifier);

  localStorage.setItem("verifier", verifier);

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("response_type", "code");
  params.append("redirect_uri", "http://localhost:5173/profile");
  params.append("scope", "user-read-private user-read-email");
  params.append("code_challenge_method", "S256");
  params.append("code_challenge", challenge);

  return `https://accounts.spotify.com/authorize?${params.toString()}`;
};

const generateCodeVerifier = (length: number) => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const generateCodeChallenge = async (codeVerifier: string) => {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
};
