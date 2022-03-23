import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutBtn } from './styles';

export function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <LogoutBtn onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </LogoutBtn>
  );
}
