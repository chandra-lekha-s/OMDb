import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./IMovie";
import SearchDisplay from "./SearchDisplay";

const OMDB_API_KEY = "2f8d162d";
const OMDB_API_URL = "http://www.omdbapi.com/";

const Search = () => {
  const [searchString, setSearchString] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const response = await axios.get(
          `${OMDB_API_URL}?apikey=${OMDB_API_KEY}&s=${searchString}`
        );

        if (response.data && response.data.Search) {
          setMovies(response.data.Search);
          SearchDisplay(movies);
        }
      } catch (error) {
        console.error("Error searching movies:", error);
      }
    };

    // Delay the API request by 300 milliseconds to avoid excessive requests while typing

    const timeoutId = setTimeout(() => {
      if (searchString) {
        searchMovies();
      } else {
        setMovies([]);
        console.log(movies);
        // <SearchDisplay />;
      }
    }, 300);

    // Clear the timeout if the user continues typing within the delay

    return () => clearTimeout(timeoutId);
  }, [searchString]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  return (
    <div>
      <input
        value={searchString}
        onChange={handleSearchChange}
        className="form-control mb-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
        style={{ width: "500px" }}
      />
      {movies.length > 0 ? (
        <div
          className="movie-list overflow-auto"
          style={{ height: "500px", width: "500px", zIndex: 2 }}
        >
          {movies.length > 0
            ? movies.map((movie) => (
                //   <div className="movie-card" key={movie.imdbID}>
                //     <img
                //       src={movie.Poster}
                //       alt={movie.Title}
                //       width={50}
                //       className="movie-poster"
                //     />

                //     <div className="movie-details">
                //       <h3 className="movie-title">{movie.Title}</h3>

                //       <p className="movie-release-date">{movie.Year}</p>
                //     </div>
                //   </div>
                <div className="card mb-2 bg-dark px-3 py-2">
                  <div className="row g-0">
                    <div className="col-md-2">
                      <img
                        src={movie.Poster}
                        alt={movie.Title}
                        height={40}
                        className="img-fluid movie-poster"
                      />
                    </div>
                    <div className="col-md-10 =">
                      <div className="card-body">
                        <p className="card-text text-light text-start">
                          {movie.Title} <br />
                          {movie.Year}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : searchString && (
                <p className="no-movies-message">
                  No movies based on the keyword.
                </p>
              )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Search;
