import axios from "axios";
import { useEffect, useState } from "react";
import IDetails from "../MovieDetails/IDetails";

function MovieDetailsOMDbData(imdb_id: any) {
  let [movieInfo, setMovieInfo] = useState<IDetails>();
  const [error, setErrors] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?apikey=2f8d162d&i=${imdb_id}`)
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

export default MovieDetailsOMDbData;
