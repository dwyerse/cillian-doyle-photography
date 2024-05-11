import { useContext } from "react";
import "./GalleryImage.css";
import ModalContext from "../Modal/ModalContext";

function GalleryImage({ src }) {
  const { setModalSrc } = useContext(ModalContext);

  return (
    <img
      className="gallery-image"
      onClick={() => {
        setModalSrc(src);
      }}
      src={src}
    />
  );
}

export default GalleryImage;
