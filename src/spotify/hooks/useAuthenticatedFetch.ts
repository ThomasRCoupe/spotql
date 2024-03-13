import { useUserAccessToken } from "./useUserAccessToken";

type RestMethod = "GET" | "POST" | "PUT" | "DELETE";

export type AuthenticatedFetch = (
  url: string,
  method: RestMethod
) => Promise<Response>;

const useAuthenticatedFetch = () => {
  const { token, refreshToken } = useUserAccessToken();

  const authenticatedFetch = async (url: string, method: RestMethod) => {
    console.log("calling url", url, "with method", method, "and token", token);

    const response = await fetch(url, {
      method: method,
      headers: { Authorization: `Bearer ${token}` },
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
