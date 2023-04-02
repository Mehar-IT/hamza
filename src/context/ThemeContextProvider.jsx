import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

const defaultTheme = {
  isLightTheme: false,
  light: { syntax: "text-gray-800", ui: "#ddd", bg: "bg-white" },
  dark: { syntax: "text-white", ui: "#333", bg: "bg-gray-900" },
};

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const data = JSON.parse(localStorage.getItem("theme"));
    return data ? { ...defaultTheme, isLightTheme: data } : defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme.isLightTheme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme({ ...theme, isLightTheme: !theme.isLightTheme });
  };

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
