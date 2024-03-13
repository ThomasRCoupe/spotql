import { useUserAccessToken } from "./useUserAccessToken";

type RestMethod = "GET" | "POST" | "PUT" | "DELETE";

export type AuthenticatedFetch = (
  url: string,
  method: RestMethod,
  body?: Record<string, unknown>
) => Promise<Response>;

const useAuthenticatedFetch = () => {
  const { token, refreshToken } = useUserAccessToken();

  const authenticatedFetch = async (
    url: string,
    method: RestMethod,
    body: Record<string, unknown> | undefined = undefined
  ) => {
    const response = await fetch(url, {
      method: method,
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(body),
    });

    if (response.status !== 401) {
      return response;
    }

    refreshToken();

    return response;
  };

  return token ? authenticatedFetch : undefined;
};

export default useAuthenticatedFetch;
