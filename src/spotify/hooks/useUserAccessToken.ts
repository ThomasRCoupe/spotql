import { useQuery } from "@tanstack/react-query";
import { AccessToken } from "../types";
import Cookies from "js-cookie";
import { getCurrentDateAfterSeconds } from "../../utils/dates";

export const useUserAccessToken = () => {
  const storedToken = Cookies.get("spotifyUserAccessToken");

  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  const redirectUrl = window.location.href.split("?")[0];

  if (!storedToken && !code) {
    redirectToSpotifyUserAuth(clientId, redirectUrl);
  }

  const { data: token, status } = useQuery({
    queryKey: ["spotifyUserAccessToken"],
    queryFn: () =>
      !storedToken && code
        ? fetchUserAccessToken(clientId, code, redirectUrl)
        : Promise.resolve(undefined),
    enabled: !storedToken && !!code,
  });

  if (status === "success" && token) {
    Cookies.set("spotifyUserAccessToken", token.access_token, {
      expires: getCurrentDateAfterSeconds(token.expires_in - 60),
    });
  }

  const refreshToken = () => {
    Cookies.remove("spotifyUserAccessToken");
    redirectToSpotifyUserAuth(clientId, redirectUrl);
  };

  return {
    token: storedToken ?? token?.access_token,
    refreshToken,
    status: storedToken ? "success" : status,
  };
};

const fetchUserAccessToken = async (
  clientId: string,
  code: string,
  redirectUrl: string
) => {
  const verifier = localStorage.getItem("verifier");

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", redirectUrl);
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

  return (await response.json()) as AccessToken;
};

const redirectToSpotifyUserAuth = async (
  clientId: string,
  redirectUrl: string
) => {
  const spotifyAuthUrl = await generateSpotifyAuthUrl(clientId, redirectUrl);

  window.location.href = spotifyAuthUrl;
};

const generateSpotifyAuthUrl = async (
  clientId: string,
  redirectUrl: string
) => {
  const verifier = generateCodeVerifier(128);
  const challenge = await generateCodeChallenge(verifier);

  localStorage.setItem("verifier", verifier);

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("response_type", "code");
  params.append("redirect_uri", redirectUrl);
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
