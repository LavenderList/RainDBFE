import React, { createContext, useState } from "react";
import galleryData from "./gallery.json";

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [gallery, setGallery] = useState(galleryData);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <GalleryContext.Provider
      value={{
        gallery,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};
