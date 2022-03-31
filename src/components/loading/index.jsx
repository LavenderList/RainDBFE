import React from "react";
import styles from "./style.module.css";
import LoadingImage from "/assets/loading.png";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src={LoadingImage} alt="loading" />
    </div>
  );
};

export default Loading;
