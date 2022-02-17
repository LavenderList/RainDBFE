import React from "react";
import styles from "./style.module.css";

const CommunityProject = ({
  name,
  leader,
  description,
  server,
  images,
  id,
}) => {
  return (
    <div className={styles.project} id={id}>
      <h1>{name}</h1>
      <h2>Project Lead: {leader}</h2>
      <p>{description}</p>
      <div className={styles.images}>
        {images
          ? images.map((image, index) => (
              <img src={image} alt={name} key={index} loading="lazy" />
            ))
          : null}
      </div>
      {server ? (
        <a href={server} target="_blank" rel="noopener noreferrer">
          Discord Server
        </a>
      ) : null}
    </div>
  );
};

export default CommunityProject;
