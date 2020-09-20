import React from "react";
import Level from "../components/Level";

const LevelTwo = () => {
  const bgStyles = {
    backgroundImage: "url(https://s23527.pcdn.co/wp-content/uploads/2014/05/inception-movie-screencaps.com-11848.jpg.optimal.jpg)",
    backgroundRepeat: "noRepeat",
    backgroundSize: "100% 100%",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
  };
  return (
    <div style={bgStyles}>
      <h1>
        <center>You're currently in Dream Level 2</center>
      </h1>
      <p>
        <center>
          To traverse further, login with the name of a character whose dream{" "}
          <br />
          you’d like to enter and the corresponding password.
        </center>
      </p>
      <Level redirectUrl="http://localhost:3000/level3" />
    </div>
  );
};

export default LevelTwo;
