import React from "react";

const Card = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  const formattedLanguage = original_language
    ? `${original_language[0].toUpperCase()}${original_language.slice(1)}`
    : "Unknown";

  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "no-movie.png"
        }
        alt={title ? title : "Default movie image"}
        className="w-full h-auto"
      />
      <div className="mt-4">
        <h3>{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
            <span>•</span>
            <p>{formattedLanguage}</p>
            <span>•</span>
            <p>{release_date ? release_date.split("-")[0] : "date"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
