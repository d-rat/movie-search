import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./header";
import Search from "./search";
import Movie from "./movie";
const defaultSearch = "https://www.omdbapi.com/?s=redemption&apikey=46a207f6";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(defaultSearch)
      .then((response) => {
        if (response.status !== 200) {
          console.log("error");
        } else {
          return response.json();
        }
      })
      .then((jsonResponse) => {
        setMovies([...jsonResponse.Search]);
      });
    setLoading(false);
  }, []);
  const search = (searchValue) => {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=46a207f6`)
      .then((response) => response.json())
      .then((jRes) => {
        if (jRes.Response === "True") {
          setMovies([...jRes.Search]);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
  };
  return (
    <div className="App">
      <Header />

      <Search searchMovie={search} />
      {loading ? (
        <h2>loading ...</h2>
      ) : (
        <div className="movies">
          {movies.map((movie) => (
            <Movie
              title={movie.Title}
              imgUrl={movie.Poster}
              year={movie.Year}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
