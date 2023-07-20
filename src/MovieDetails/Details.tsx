import { useParams } from "react-router-dom";
import "./DetailsStyles.css";
import MovieDetailsTMDbData from "../FetchData/MovieDetailsTMDbData";
import MovieDetailsOMDbData from "../FetchData/MovieDetailsOMDbData";
import Cards from "../MovieCards/Cards";
import { useEffect } from "react";

function MovieDetails() {
  const { id } = useParams();
  const MovieData = MovieDetailsTMDbData(id);
  console.log(MovieData);
  return (
    <>
      <div className="movie-card">
        {MovieData?.message ? (
          <p className="text-light">{MovieData?.message}</p>
        ) : (
          <>
            <div className="card-overlay"></div>
            <div className="image-container">
              <img
                src={
                  "https://image.tmdb.org/t/p/original/" +
                  MovieData?.backdrop_path
                }
                alt="Image"
                className="image"
              />
            </div>
            <div className="posterDisplay">
              <img
                src={`https://image.tmdb.org/t/p/w500${MovieData?.poster_path}`}
                alt="Image"
              />
              <div className=" text-light w-75 text-center m-auto pt-2">
                <p>
                  <b>Production</b>
                </p>

                {MovieData?.production_companies.map((content, index) => (
                  <span key={index} style={{ fontSize: "13px" }}>
                    &nbsp; {content.name} ({content.origin_country});
                  </span>
                ))}
              </div>
            </div>
            <div className="text-overlay1">
              <h1 className="movie-title">{MovieData?.title}</h1>
              <div className=" my-3 py-1">
                {MovieData?.genres.map((content, index) => (
                  <span
                    key={index}
                    className="label border border-light px-3 py-1 mx-2 rounded "
                  >
                    {content.name}
                  </span>
                ))}
              </div>
              <p>
                &#9733;&nbsp; {MovieData?.vote_average} / 10 &nbsp; &middot;
                &nbsp;
                {MovieData?.release_date.slice(0, 4)} &nbsp; &middot; &nbsp;
                {MovieData?.runtime ? MovieData?.runtime : "N/A"} min &nbsp;
                &middot; &nbsp;
                {MovieData?.status ? MovieData?.status : "N/A"}
              </p>
              <p className="pb-3 text-justify">
                {MovieData?.overview ? MovieData?.overview : "N/A"}
              </p>
              <hr />
              <p className="movie-shorts">
                <b>Original Title </b> &nbsp;
                {MovieData?.original_title ? MovieData?.title : "N/A"} <br />
              </p>
              <hr />
              <p>
                <b>Tagline </b> &nbsp;
                {MovieData?.tagline ? MovieData?.tagline : "N/A"} <br />
                <hr />
              </p>
              <p>
                <b>Popularity </b> &nbsp;
                {MovieData?.popularity ? MovieData?.popularity : "N/A"} <br />
                <hr />
              </p>
              <p>
                <b>Release date </b> &nbsp;
                {MovieData?.release_date ? MovieData?.release_date : "N/A"}
                <br />
                <hr />
              </p>
              <p>
                <b>Homepage </b> &nbsp;
                {MovieData?.homepage ? MovieData?.homepage : "N/A"} <br />
                <hr />
              </p>
            </div>
          </>
        )}
      </div>
      <div className="p-3 m-3" />
      <Cards
        category={"popular"}
        title={"Related movies"}
        scrollType={"horizontal"}
      />
    </>
  );
}

export default MovieDetails;
