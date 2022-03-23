import { useAuth0 } from "@auth0/auth0-react";
import { LoginBtn } from "./styles";

export function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return <LoginBtn onClick={() => loginWithRedirect()}>Login</LoginBtn>;
}
