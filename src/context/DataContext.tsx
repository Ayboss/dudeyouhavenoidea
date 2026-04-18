"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

const dataContext = createContext<{
  info: { darkMode: boolean };
  setInfo: React.Dispatch<
    React.SetStateAction<{
      darkMode: boolean;
    }>
  >;
}>({
  info: { darkMode: false },
  setInfo: () => {},
});

function DataProvider({ children }: { children: React.ReactNode }) {
  const [info, setInfo] = useState<{ darkMode: boolean }>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");

      if (saved === "dark") return { darkMode: true };
      if (saved === "light") return { darkMode: false };

      return {
        darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
      };
    }

    return { darkMode: false };
  });

  useEffect(() => {
    const root = document.documentElement;

    if (info.darkMode) {
      root.classList.add("dark");

      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");

      localStorage.setItem("theme", "light");
    }
  }, [info.darkMode]);

  return (
    <dataContext.Provider value={{ info, setInfo }}>
      {children}
    </dataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(dataContext);
}

export default DataProvider;
