import React from "react";
import Level from "../components/Level";

const LevelOne = () => {
  const bgStyles = {
    backgroundImage: "url(https://i.ibb.co/376g5WN/IMG-1599.jpg)",
    backgroundRepeat: "noRepeat",
    backgroundSize: "100% 100%",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
  };
  return (
    <div style={bgStyles}>
      <h1>
        <center>You're currently in Dream Level 1</center>
      </h1>
      <p>
        <center>
          To traverse further, login with the name of a character whose dream{" "}
          <br />
          you’d like to enter and the corresponding password.
        </center>
      </p>
      <Level redirectUrl="http://localhost:3000/level2" />
    </div>
  );
};

export default LevelOne;
