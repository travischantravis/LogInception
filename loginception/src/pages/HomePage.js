import React, { useState } from "react";
import LoginForm from "../components/LoginForm";

const HomePage = () => {
  const [level, setLevel] = useState("one");
  return (
    <div>
      <h2>Welcome to LogInception</h2>
      <LoginForm redirectUrl="http://localhost:3000/level1" />
    </div>
  );
};

export default HomePage;
