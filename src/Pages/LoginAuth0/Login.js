import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "Components/LoginButton";
import { LogoutButton } from "Components/LogoutButton";
import { Maindiv } from "Pages/Home/styles";
import { UserProfile } from "Pages/Profile";
import React from "react";

const Login = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Maindiv>
      <h1>Profile</h1>
      {isAuthenticated ? (
        <>
          <UserProfile />
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </Maindiv>
  );
};

export default Login;
