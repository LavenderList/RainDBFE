import React, { useEffect } from "react";
import { useLocation } from "wouter";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [location]);

  return null;
};

export default ScrollToTop;
