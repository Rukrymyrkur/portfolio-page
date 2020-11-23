import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Button, PaintBlack } from "./ModeButton.elements";
import { useSpring } from "react-spring";

const ModeButton = ({ theme, setTheme }) => {
  return (
    <>
      <Button onClick={setTheme}>
        {theme === "light" ? (
          <FaMoon className="mode-icon" />
        ) : (
          <FaSun className="mode-icon" />
        )}
      </Button>
    </>
  );
};

export default ModeButton;
