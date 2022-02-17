import React from "react";
import styles from "./style.module.css";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src="assets/loading.png" alt="loading" />
    </div>
  );
};

export default Loading;
