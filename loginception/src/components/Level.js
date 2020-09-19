import React from "react";
import LoginForm from "./LoginForm";
import Profile from "./Profile";

const Level = (props) => {
  const { level } = props;
  return (
    <div>
      <h3>Level {level}</h3>
      <LoginForm />
      <Profile />
    </div>
  );
};

export default Level;
