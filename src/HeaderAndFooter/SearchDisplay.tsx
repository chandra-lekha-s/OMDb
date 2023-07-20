import { useParams } from "react-router-dom";
import MovieDetailsOMDbData from "../FetchData/MovieDetailsOMDbData";
import Cards from "../MovieCards/Cards";

const SearchDisplay = () => {
  const { imdb } = useParams();
  const MovieData = MovieDetailsOMDbData(imdb);
  console.log(MovieData);
  return (
    <>
      <div className="movie-card">
        {MovieData?.message ? (
          <p className="text-light">{MovieData?.message}</p>
        ) : (
          <>
            <div className="posterDisplay">
              <img src={`${MovieData?.Poster}`} alt="Image" />
            </div>
            <div className="text-overlay1">
              <h1 className="movie-title">{MovieData?.Title}</h1>
              <div className=" my-3 py-1">{MovieData?.Genre}</div>
              <p>
                &#9733;&nbsp; {MovieData?.imdbRating} / 10 &nbsp; &middot;
                &nbsp;
                {MovieData?.Year ? MovieData?.Year : "N/A"} &nbsp; &middot;
                &nbsp;
                {MovieData?.Runtime ? MovieData?.Runtime : "N/A"} &nbsp;
                &middot; &nbsp;
                {MovieData?.Rated ? MovieData?.Rated : "N/A"} Rated
              </p>
              <p className="pb-3 text-justify">{MovieData?.Plot}</p>
              <hr />

              <p>
                <b>Language </b> &nbsp;
                {MovieData?.Language ? MovieData?.Language : "N/A"} <br />
                <hr />
              </p>
              <p className="movie-shorts">
                <b>Director </b> &nbsp;
                {MovieData?.Director ? MovieData?.Director : "N/A"} <br />
              </p>
              <hr />
              <p>
                <b>Writer </b> &nbsp;
                {MovieData?.Writer ? MovieData?.Writer : "N/A"} <br />
                <hr />
              </p>
              <p>
                <b>Actors </b> &nbsp;
                {MovieData?.Actors ? MovieData?.Actors : "N/A"} <br />
                <hr />
              </p>
              <p>
                <b>Homepage </b> &nbsp;
                {MovieData?.Website ? MovieData?.Website : "N/A"} <br />
                <hr />
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default SearchDisplay;
