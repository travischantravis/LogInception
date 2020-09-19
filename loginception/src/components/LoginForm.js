import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginForm(props) {
  const { redirectUrl } = props;
  const { loginWithRedirect, logout } = useAuth0();
  console.log(redirectUrl);
  return (
    <div>
      <button
        onClick={() => {
          logout();
          loginWithRedirect({ redirectUri: redirectUrl });
        }}
      >
        Log In
      </button>
      <button
        onClick={() => {
          logout({ returnTo: window.location.origin });
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default LoginForm;
