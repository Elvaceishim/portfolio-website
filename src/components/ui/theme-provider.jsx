"use client";

import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
  theme: "light",
  setTheme: () => null,
};

const ThemeProviderContext = createContext(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "portfolio-theme",
  ...props
}) {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;
    
    const storedTheme = localStorage.getItem(storageKey);
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      // Check system preference
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
    }
  }, [storageKey]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme) => {
      setTheme(newTheme);
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, newTheme);
      }
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
