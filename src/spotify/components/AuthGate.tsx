import { useUserAccessToken } from "../hooks/useUserAccessToken";

interface AuthGateProps {
  children: React.ReactNode;
}

const AuthGate = ({ children }: AuthGateProps) => {
  const { token, status } = useUserAccessToken();

  console.log(token, status);

  return token && status === "success" ? children : undefined;
};

export default AuthGate;
