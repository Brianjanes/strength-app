import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthButton = () => {
  const { user, isAuthenticated, login, logout } = useAuth0();

  return <div>AuthButton</div>;
};

export default AuthButton;
