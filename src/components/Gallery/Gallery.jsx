import GalleryImage from "../GalleryImage/GalleryImage";
import Images from "../../assets/images/weddings";

function Gallery() {
  return (
    <div className="row">
      <div className="column">
        <GalleryImage src={Images[0]} />
        <GalleryImage src={Images[1]} />
        <GalleryImage src={Images[2]} />
        <GalleryImage src={Images[3]} />
        <GalleryImage src={Images[4]} />
      </div>
      <div className="column">
        <GalleryImage src={Images[5]} />
        <GalleryImage src={Images[6]} />
        <GalleryImage src={Images[7]} />
        <GalleryImage src={Images[8]} />
        <GalleryImage src={Images[0]} />
      </div>
      <div className="column">
        <GalleryImage src={Images[1]} />
        <GalleryImage src={Images[2]} />
        <GalleryImage src={Images[3]} />
        <GalleryImage src={Images[4]} />
        <GalleryImage src={Images[5]} />
      </div>
      <div className="column">
        <GalleryImage src={Images[6]} />
        <GalleryImage src={Images[7]} />
        <GalleryImage src={Images[8]} />
        <GalleryImage src={Images[0]} />
        <GalleryImage src={Images[1]} />
      </div>
    </div>
  );
}

export default Gallery;
