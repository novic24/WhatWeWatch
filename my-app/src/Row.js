import React, { useState, useEffect } from "react";
import axios from "./axios"; //we import it from the file because we already create it
import "./styles/Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  //when row appears on the screen we use this part. That's what useEffect does.
  useEffect(() => {
    //if [], run once when the row loads, and dont run it again. We just run it one time.

    //we need an asyn function because we call data outsite the website (the api)
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }

    //we run the function fetchData()
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div>
      <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">
          {movies.map((movie) => (
            //   https://developers.themoviedb.org/3/getting-started/images
            //we use the key={movie.id} to optimize react and be faster when we charge the website
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt="{movie.name}"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Row;
