import Corporate from "../../assets/images/corporate";
import "./Landing.css";

function Landing() {
  const src = Corporate[2];

  return (
    <div className="landing-gallery">
      <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 100 100">
        {/* <clipPath id="clip">
          <path d="M90,10 C100,0 100,0 110,10 190,90 190,90 190,90 200,100 200,100 190,110 190,110 110,190 110,190 100,200 100,200 90,190 90,190 10,110 10,110 0,100 0,100 10,90Z" />
        </clipPath> */}
        <image style={{ width: 100, height: 100 }} href={`${src.large}`} />
      </svg>

      <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 100 100">
        {/* <clipPath id="clip">
          <path d="M90,10 C100,0 100,0 110,10 190,90 190,90 190,90 200,100 200,100 190,110 190,110 110,190 110,190 100,200 100,200 90,190 90,190 10,110 10,110 0,100 0,100 10,90Z" />
        </clipPath> */}
        <image style={{ width: 100, height: 100 }} href={`${src.large}`} />
      </svg>

      {/* <img
        className="landing-image"
        width="1500"
        src={`${src.large}`}
        srcSet={`${src.small} 500w, ${src.medium} 1000w, ${src.large} 1500w`}
        sizes="(min-width: 620px) calc(25vw - 8px), 100vw"
      /> */}
      {/* <img
        className="landing-image"
        width="1500"
        src={`${src.large}`}
        srcSet={`${src.small} 500w, ${src.medium} 1000w, ${src.large} 1500w`}
        sizes="(min-width: 620px) calc(25vw - 8px), 100vw"
      />
      <img
        className="landing-image"
        width="1500"
        src={`${src.large}`}
        srcSet={`${src.small} 500w, ${src.medium} 1000w, ${src.large} 1500w`}
        sizes="(min-width: 620px) calc(25vw - 8px), 100vw"
      />
      <img
        className="landing-image"
        width="1500"
        src={`${src.large}`}
        srcSet={`${src.small} 500w, ${src.medium} 1000w, ${src.large} 1500w`}
        sizes="(min-width: 620px) calc(25vw - 8px), 100vw"
      />
      <img
        className="landing-image"
        width="1500"
        src={`${src.large}`}
        srcSet={`${src.small} 500w, ${src.medium} 1000w, ${src.large} 1500w`}
        sizes="(min-width: 620px) calc(25vw - 8px), 100vw"
      />
      <img
        className="landing-image"
        width="1500"
        src={`${src.large}`}
        srcSet={`${src.small} 500w, ${src.medium} 1000w, ${src.large} 1500w`}
        sizes="(min-width: 620px) calc(25vw - 8px), 100vw"
      />
      <img
        className="landing-image"
        width="1500"
        src={`${src.large}`}
        srcSet={`${src.small} 500w, ${src.medium} 1000w, ${src.large} 1500w`}
        sizes="(min-width: 620px) calc(25vw - 8px), 100vw"
      />
      <img
        className="landing-image"
        width="1500"
        src={`${src.large}`}
        srcSet={`${src.small} 500w, ${src.medium} 1000w, ${src.large} 1500w`}
        sizes="(min-width: 620px) calc(25vw - 8px), 100vw"
      /> */}
    </div>
  );
}

export default Landing;
