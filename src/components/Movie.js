import React from "react";

const Movie = ({ name, url }) => {
  return (
    <>
      <ul>
        <li>
          <a href={url} target="_blank" rel="noreferrer">
            {name}
          </a>
        </li>
      </ul>
    </>
  );
};

export default Movie;
