import React from "react";
import Level from "../components/Level";

const LevelOne = () => {
  return (
    <div>
      <h2>Level one</h2>
      <Level redirectUrl="http://localhost:3000/level2" />
    </div>
  );
};

export default LevelOne;
