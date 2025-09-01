'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('system');
  const [resolvedTheme, setResolvedTheme] = useState('light');

  useEffect(() => {
    // Get initial theme from localStorage or default to system
    const stored = localStorage.getItem('theme');
    const initialTheme = stored || 'system';
    setTheme(initialTheme);

    // Function to update resolved theme
    const updateResolvedTheme = (themeValue) => {
      let resolved = themeValue;
      if (themeValue === 'system') {
        resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      setResolvedTheme(resolved);
      
      // Update document class
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(resolved);
    };

    // Update initial resolved theme
    updateResolvedTheme(initialTheme);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        updateResolvedTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [theme]);

  const setThemeValue = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    let resolved = newTheme;
    if (newTheme === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    setResolvedTheme(resolved);
    
    // Update document class
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(resolved);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme: setThemeValue }}>
      {children}
    </ThemeContext.Provider>
  );
}
