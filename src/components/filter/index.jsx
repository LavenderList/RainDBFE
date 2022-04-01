import React, { useContext, useEffect } from "react";
import { FilterContext } from "../../context/filterContext";
import { useLocation } from "wouter";
import Select from "../select";
import style from "./style.module.css";

const Filter = () => {
  const { modCategory, setModCategory, setShow, setSearch } =
    useContext(FilterContext);
  const [location] = useLocation();

  useEffect(() => {
    setShow("all");
  }, [modCategory, location]);

  const optionsModCategory = [
    { value: "1.01", label: "v1.01" },
    { value: "1.5", label: "v1.5" },
    { value: "arenas", label: "Arenas" },
    { value: "palettes", label: "Palettes" },
  ];

  const optionsModsShow = [
    { value: "all", label: "All" },
    { value: "newest", label: "Newest" },
    { value: "tools", label: "Tools" },
    { value: "contentMods", label: "Content Mods" },
    { value: "hookPatch", label: "Hook/Patch Mods" },
    { value: "standalone", label: "Standalone Mods" },
  ];

  const optionsArenasShow = [
    { value: "all", label: "All" },
    { value: "newest", label: "Newest" },
  ];

  const handleModCategory = (e) => {
    setModCategory(e.target.value);
  };

  const handleShow = (e) => {
    setShow("all");
    setShow(e.target.value);
  };

  return (
    <>
      <div className={style.filter}>
        <Select
          values={optionsModCategory}
          defValue="1.5"
          func={handleModCategory}
        />
        <div className={style.searchBar}>
          <input
            type="text"
            placeholder="Search"
            onChange={() => setSearch("Downpour")}
          />
        </div>
        {modCategory == "arenas" ? (
          <Select values={optionsArenasShow} func={handleShow} defValue="All" />
        ) : modCategory != "1.01" ? (
          <Select values={optionsModsShow} func={handleShow} defValue="All" />
        ) : null}
      </div>
    </>
  );
};

export default Filter;
