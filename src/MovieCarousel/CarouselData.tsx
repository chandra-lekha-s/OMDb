import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, Container, Image } from "react-bootstrap";
import "./CarouselDataStyles.css";
import NewMovieLists from "../FetchData/NewMovieList";

interface CarouselLimit {
  setLimit: number;
}

const MovieCarousel = ({ setLimit }: CarouselLimit) => {
  const movies = NewMovieLists("popular", setLimit);
  const backdropUrl = "https://image.tmdb.org/t/p/original";
  // return (
  //   <div className="p-2">
  //     <Carousel>
  //       {movies.map((movie) => (
  //         <Carousel.Item key={movie.id}>
  //           <div
  //             style={{
  //               display: "inline",
  //               justifyContent: "left",
  //             }}
  //           >
  //             <img
  //               className="d-block w-45"
  //               src={BackDrop_IMG + movie.backdrop_path}
  //               alt={movie.title}
  //               height={500}
  //               width={"100%"}
  //             />
  //           </div>
  //           <Carousel.Caption
  //             className="text-center"
  //             style={{
  //               color: "white",
  //             }}
  //           >
  //             <h3>{movie.title}</h3>
  //             <p>{movie.release_date.slice(0, 4)}</p>
  //           </Carousel.Caption>
  //         </Carousel.Item>
  //       ))}
  //     </Carousel>
  //   </div>
  // );
  // return (
  //   <Container fluid className="image-container">
  //     <Image
  //       src={BackDrop_IMG + "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg"}
  //       fluid
  //       className="gradient-image"
  //     />
  //   </Container>
  // );
  return (
    <Carousel className="carousel-container">
      {movies.map((movie) => (
        <Carousel.Item key={movie.id}>
          <div className="image-caption-container ">
            <div className="gradient-image">
              <img
                src={backdropUrl + movie.backdrop_path}
                alt={movie.title}
                height={500}
                width={"100%"}
                className="carousel-image "
              />
            </div>
            <div className="carousel-caption ">
              <h3>{movie.title}</h3>

              <p>
                rated {movie.vote_average} | {movie.release_date.slice(0, 4)}
              </p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
