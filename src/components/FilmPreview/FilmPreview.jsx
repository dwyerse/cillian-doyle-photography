import { useContext } from "react";
import VideoModalContext from "../VideoModal/VideoModalContext";
import "./FilmPreview.css";

function FilmPreview({ src }) {
  const { setVideoModalSrc } = useContext(VideoModalContext);

  return (
    <div className="film-preview">
      <h2>Film name</h2>
      <div>Film description</div>
      <div className="image-container">
        <img
          onClick={() => {
            setVideoModalSrc(src);
          }}
          src={`https://img.youtube.com/vi/${src}/maxresdefault.jpg`}
        />
        <span
          onClick={() => {
            setVideoModalSrc(src);
          }}
          className="play-button material-symbols-outlined"
        >
          play_circle
        </span>
      </div>
    </div>
  );
}

export default FilmPreview;
