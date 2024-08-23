import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MoviesCards = ({
  posterPath,
  videoKey,
  title,
  description,
  releaseDate,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!posterPath) return null;

  return (
    <div
      className="w-44 sm:w-52 md:w-60 lg:w-64 xl:w-72 pr-2 flex-shrink-0 relative "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-0 pb-[56.25%]">
        {/* 16:9 aspect ratio */}
        <img
          alt="movies-card"
          src={IMG_CDN_URL + posterPath}
          className={`absolute top-0 left-0 w-full h-full rounded-lg shadow-md object-cover transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
        {isHovered && (
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md z-10"
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0`}
            title="YouTube video player"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        {isHovered && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 rounded-lg flex flex-col justify-center items-center text-white p-4 z-20">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-sm mb-2">{description}</p>
            <p className="text-xs">{releaseDate}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesCards;
