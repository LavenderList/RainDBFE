import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "wouter";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [modCategory, setModCategory] = useState("1.5");
  const [location, setLocation] = useLocation();
  const [show, setShow] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch("");
  }, [location]);

  return (
    <FilterContext.Provider
      value={{
        modCategory,
        setModCategory,
        show,
        setShow,
        search,
        setSearch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
