import { useEffect, useState } from "react";

export default function useDarkSide() {
  let [darkMode, setMode] = useState(localStorage.mode);
  const colorTheme = darkMode === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(darkMode);
    root.classList.add(colorTheme);
    localStorage.setItem("mode", darkMode);
  }, [darkMode, colorTheme]);
  return [colorTheme, setMode];
}
