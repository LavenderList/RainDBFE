import React, { useContext } from "react";
import Background from "../../components/background";
import Lightbox from "../../components/lightbox";
import styles from "./style.module.css";
import { GalleryContext } from "../../context/galleryContext";

const Gallery = () => {
  const { gallery } = useContext(GalleryContext);
  return (
    <>
      <Background url="assets/backgrounds/6.jpg" />
      <div className={styles.gallery}>
        <div className={styles.title}>
          <h1>Level Editor Gallery</h1>
          <p>
            A selection of user created maps made with the official Level
            Editor. Click on any image to view the full map and author.
          </p>
        </div>
        <div className={styles.images}>
          {gallery.map((item, index) => (
            <Lightbox
              src={`assets/gallery/${item.filename}`}
              key={index}
              author={item.author}
              index={index}
              total={gallery.length}
            >
              <img
                src={`assets/gallery/thumbnails/${item.filename}`}
                title={`Author: ${item.author}`}
              />
            </Lightbox>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
