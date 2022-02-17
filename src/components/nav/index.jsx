import React from "react";
import { Link } from "wouter";
import styles from "./style.module.css";
import logo from "../../logo.png";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <a>
          <img src={logo} alt="Main logo" />
        </a>
      </Link>
      <ul>
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
    </nav>
  );
};

export default Nav;
