import React, { useEffect, useState } from "react";
import axios from "axios";

const NewMovieLists = (category: string, limit?: number) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/" +
            category +
            "?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
        );
        // console.log(limit);
        setMovies(response.data.results.slice(0, limit));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);
  // console.log(movies);
  return movies;
};

export default NewMovieLists;
