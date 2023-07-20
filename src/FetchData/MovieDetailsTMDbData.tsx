import axios from "axios";
import { useEffect, useState } from "react";

function MovieDetailsTMDbData(movieId: any) {
  let [movieInfo, setMovieInfo] = useState();
  const [error, setErrors] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      )
      .then((response) => {
        setMovieInfo(response.data);
      })
      .catch((error) => {
        setErrors(error);
        console.error("Error searching movie:", error);
      });
  }, []);
  if (error) return error;
  else return movieInfo;
}

export default MovieDetailsTMDbData;
