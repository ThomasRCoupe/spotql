import { useUserAccessToken } from "../hooks/useUserAccessToken";

interface AuthGateProps {
  children: React.ReactNode;
}

const AuthGate = ({ children }: AuthGateProps) => {
  const { token, status } = useUserAccessToken();

  return token && status === "success" ? children : undefined;
};

export default AuthGate;
