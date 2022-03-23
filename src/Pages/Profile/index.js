import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ProfileDiv } from "./styles";

export function UserProfile () {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <ProfileDiv>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </ProfileDiv>
    )
  );
};
