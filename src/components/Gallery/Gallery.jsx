import GalleryImage from "../GalleryImage/GalleryImage";
import weddings from "../../assets/images/weddings";

function Gallery() {
  return (
    <div className="row">
      <div className="column">
        <GalleryImage src={weddings.a} />
        <GalleryImage src={weddings.b} />
        <GalleryImage src={weddings.c} />
        <GalleryImage src={weddings.d} />
        <GalleryImage src={weddings.e} />
      </div>
      <div className="column">
        <GalleryImage src={weddings.f} />
        <GalleryImage src={weddings.g} />
        <GalleryImage src={weddings.h} />
        <GalleryImage src={weddings.i} />
        <GalleryImage src={weddings.a} />
      </div>
      <div className="column">
        <GalleryImage src={weddings.b} />
        <GalleryImage src={weddings.c} />
        <GalleryImage src={weddings.d} />
        <GalleryImage src={weddings.e} />
        <GalleryImage src={weddings.f} />
      </div>
      <div className="column">
        <GalleryImage src={weddings.g} />
        <GalleryImage src={weddings.h} />
        <GalleryImage src={weddings.i} />
        <GalleryImage src={weddings.a} />
        <GalleryImage src={weddings.b} />
      </div>
    </div>
  );
}

export default Gallery;
