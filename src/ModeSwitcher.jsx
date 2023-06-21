import { useState } from "react";
import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./hooks/useDarkSide";

export default function ModeSwitcher() {
  const [colorTheme, setMode] = useDarkSide();
  const [darkMode, setDarkMode] = useState(
    colorTheme === "light" ? false : true
  );
  const toggleDarkMode = (checked) => {
    setMode(colorTheme);
    setDarkMode(checked);
  };

  return (
    <>
      <DarkModeSwitch
        className="m-2 absolute"
        checked={darkMode}
        onChange={toggleDarkMode}
        size={30}
      />
    </>
  );
}
