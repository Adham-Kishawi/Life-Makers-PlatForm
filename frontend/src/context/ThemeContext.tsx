"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Theme = "dark" | "light";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("life_makers_theme") as Theme;
      const initialTheme = stored === "light" || stored === "dark" ? stored : "dark";
      setThemeState(initialTheme);
      applyTheme(initialTheme);
    }
  }, []);

  const applyTheme = (targetTheme: Theme) => {
    const root = document.documentElement;
    const body = document.body;
    if (targetTheme === "dark") {
      root.classList.add("dark", "dark-mode");
      root.classList.remove("light", "light-mode");
      if (body) {
        body.classList.add("dark", "dark-mode");
        body.classList.remove("light", "light-mode");
      }
    } else {
      root.classList.add("light", "light-mode");
      root.classList.remove("dark", "dark-mode");
      if (body) {
        body.classList.add("light", "light-mode");
        body.classList.remove("dark", "dark-mode");
      }
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("life_makers_theme", newTheme);
      applyTheme(newTheme);
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        isDark: theme === "dark",
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: "dark" as Theme,
      setTheme: () => {},
      toggleTheme: () => {},
      isDark: true,
    };
  }
  return context;
}
