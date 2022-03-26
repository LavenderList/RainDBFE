import React, { useState } from "react";
import styles from "./style.module.css";

const Lightbox = ({ children, src, author, Wrapper = "div", index, total }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <Wrapper onClick={handleClick} className={styles.lightBox}>
      {children}
      {isOpen ? (
        <div className={styles.active}>
          <div className={styles.thumbnail}>
            <img src={src} />
          </div>
          <div className={styles.description}>
            <p>Author: {author}</p>
            <p>
              {index + 1} of {total}
            </p>
          </div>
        </div>
      ) : null}
    </Wrapper>
  );
};

export default Lightbox;
