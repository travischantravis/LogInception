import React from "react";
import Level from "../components/Level";

const LevelTwo = () => {
  return (
    <div>
      <h2>Level two</h2>
      <Level redirectUrl="http://localhost:3000/level3" />
    </div>
  );
};

export default LevelTwo;
