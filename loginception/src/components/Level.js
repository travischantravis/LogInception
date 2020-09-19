import React from "react";
import LoginForm from "./LoginForm";
import Profile from "./Profile";

const Level = (props) => {
  const { redirectUrl } = props;

  return (
    <div>
      <LoginForm redirectUrl={redirectUrl} />
      <Profile />
    </div>
  );
};

export default Level;
