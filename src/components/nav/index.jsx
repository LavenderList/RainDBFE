import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import styles from "./style.module.css";
import logo from "../../logo.png";

const Nav = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState();
  const [location] = useLocation();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setBurgerActive(false);
  }, [location]);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const handleClick = () => {
    setBurgerActive((burgerActive) => !burgerActive);
  };

  return (
    <nav>
      <Link to="/">
        <a>
          <img src={logo} alt="Main logo" />
        </a>
      </Link>
      <ul className={burgerActive ? styles.activeNav : null}>
        <li>
          <a href="#">Top</a>
        </li>
        <li>
          <Link to="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link to="/gallery">
            <a>Gallery</a>
          </Link>
        </li>
        <li>
          <Link to="/tutorials">
            <a>Tutorials</a>
          </Link>
        </li>
        <li>
          <Link to="/submit">
            <a>Submit</a>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <a>Community Projects</a>
          </Link>
        </li>
      </ul>
      {windowWidth > 850 ? null : (
        <div
          className={
            burgerActive ? `${styles.burger} ${styles.active}` : styles.burger
          }
          onClick={handleClick}
        >
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
