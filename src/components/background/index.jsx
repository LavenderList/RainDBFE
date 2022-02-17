import React, { useState } from "react";
import { useLocation } from "wouter";
import style from "./style.module.css";

const Background = ({ url }) => {
  const [clickCount, setClickCount] = useState(0);
  const [location, setLocation] = useLocation();
  const handleClick = () => {
    if (clickCount === 2) {
      setClickCount(0);
      setLocation("/mod/1.8/MoreSlugcats");
    }
    setClickCount(clickCount + 1);
  };

  return (
    <div
      className={style.background}
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <h1 onClick={handleClick}>Rain World Mod Database</h1>
      <h2>RainDB, for short.</h2>
    </div>
  );
};

export default Background;
