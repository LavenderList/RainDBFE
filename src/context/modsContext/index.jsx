import React, { createContext, useState, useEffect } from "react";
import ModsData from "./mods.json";

export const ModContext = createContext();

export const ModProvider = ({ children }) => {
  const [mods, setMods] = useState();
  useEffect(() => {
    setMods(ModsData);
  }, []);

  return <ModContext.Provider value={{ mods }}>{children}</ModContext.Provider>;
};
