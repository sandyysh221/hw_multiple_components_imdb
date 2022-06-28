import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  const movieNodes = movies.map((movie) => {
    return <Movie key={movie.id} name={movie.name} url={movie.url} />;
  });

  return <>{movieNodes}</>;
};

export default MovieList;
