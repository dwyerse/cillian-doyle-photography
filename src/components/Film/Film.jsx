import FilmPreview from "../FilmPreview/FilmPreview";
import "./Film.css";

function Film() {
  const films = ["dQw4w9WgXcQ", "4pFUP0HZwWM", "dQw4w9WgXcQ", "4pFUP0HZwWM"];

  return (
    <div className="films">
      {films.map((src) => (
        <FilmPreview src={src} />
      ))}
    </div>
  );
}

export default Film;
