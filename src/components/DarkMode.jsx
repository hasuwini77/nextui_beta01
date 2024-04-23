import React, { useState, useEffect } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon.jsx";
import { SunIcon } from "./SunIcon.jsx";

export default function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Apply dark mode class to the main element when darkMode state changes
  useEffect(() => {
    const mainElement = document.querySelector("main");
    if (mainElement) {
      if (darkMode) {
        mainElement.classList.add("dark");
      } else {
        mainElement.classList.remove("dark");
      }
    }
  }, [darkMode]);

  return (
    <Switch
      defaultSelected={darkMode}
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) => (isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />)}
      onChange={toggleDarkMode} // Handle state change
    >
      Dark mode
    </Switch>
  );
}
