import React from "react";

import { useTheme } from "../../../hooks/useTheme";

import cl from './ThemeButtons.module.css'


const ThemeButtons = () => {
  const { theme, setTheme } = useTheme()

  const handleLightThemeClick = () => {
    setTheme('light')
  }

  const handleDarkThemeClick = () => {
    setTheme('dark')
  }

  return (
    <div className={cl.themeButtons}>
      <button onClick={handleLightThemeClick}>light</button>
      <button onClick={handleDarkThemeClick}>dark</button>
    </div>
  )
};

export default ThemeButtons;
