import React, { useState } from "react";
import LoginForm from "../components/LoginForm";

const HomePage = () => {
  const [level, setLevel] = useState("1");
  return (
    <div>
      <h2>Welcome to LogInception</h2>
      <LoginForm />
    </div>
  );
};

export default HomePage;
