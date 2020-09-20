import React from "react";
import Level from "../components/Level";

const LevelThree = () => {
  const bgStyles = {
    backgroundImage: "url(https://s23527.pcdn.co/wp-content/uploads/2014/05/inception-314.jpg.optimal.jpg)",
    backgroundRepeat: "noRepeat",
    backgroundSize: "100% 100%",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
  };
  return (
    <div style={bgStyles}>
      <h1>
        <center>You're currently in Dream Level 3</center>
      </h1>
      <p>
        <center>
          To traverse further, login with the name of a character whose dream{" "}
          <br />
          you’d like to enter and the corresponding password.
        </center>
      </p>
      <Level />
    </div>
  );
};

export default LevelThree;
