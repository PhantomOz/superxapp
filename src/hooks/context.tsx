"use client"
import React, { createContext, useContext, useState } from "react";

// Array of Themes
const themes = [
  "light", "dark", "cupcake", "corporate", "synthwave", 
  "retro", "cyberpunk", "valentine", "garden", "aqua", 
  "lofi", "luxury", "dracula", "cmyk", 
  "autumn", "lemonade", "night", "coffee", "winter", 
  "dim", "nord", "sunset"
];

// Create the Theme Context
const ThemeContext = createContext({ theme: "valentine", toggleTheme: () => {} });

// Theme Provider Component
export const ThemeProvider = ({ children }:any) => {
  const [theme, setTheme] = useState("valentine");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const currentIndex = themes.indexOf(prevTheme);
      const nextIndex = (currentIndex + 1) % themes.length;
      return themes[nextIndex];
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom Hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};



export const useNavIcon = () => {

    return "/img/logo.svg";
};


