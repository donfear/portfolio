import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriterPosition() {
  return (
    <Typewriter
      onInit={() => null}
      options={{
        strings: [
          "Developer",
          "Front End Developer",
          "Back End Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriterPosition;
