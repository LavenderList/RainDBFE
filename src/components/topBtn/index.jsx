import React, { useState } from "react";
import styles from "./style.module.css";

const TopBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 600) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      {visible ? (
        <div className={styles.topBtn} onClick={toTop}>
          <span className="material-icons">keyboard_arrow_up</span>
        </div>
      ) : null}
    </>
  );
};

export default TopBtn;
