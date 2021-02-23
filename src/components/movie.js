import React from "react";

const defaultIMG =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

function Movie({ title, imgUrl, year }) {
  return (
    <div className="movie">
      <h3>{title}</h3>
      <img src={imgUrl || defaultIMG} alt={title} />
      <p>{year}</p>
    </div>
  );
}

export default Movie;
