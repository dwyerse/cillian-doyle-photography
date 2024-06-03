import { useContext } from "react";
import ModalContext from "../Modal/ModalContext";
import "./GalleryImage.css";

function GalleryImage({ src }) {
  const { setModalSrc } = useContext(ModalContext);

  return (
    <img
      className="gallery-image"
      width="1500"
      onClick={() => {
        setModalSrc(src.large);
      }}
      src={`${src.large}`}
      srcSet={`${src.small} 500w, ${src.medium} 1000w, ${src.large} 1500w`}
      sizes="(min-width: 620px) calc(25vw - 8px), 100vw"
    />
  );
}

export default GalleryImage;
