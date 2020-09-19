import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginForm() {
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    </div>
  );
}

export default LoginForm;
