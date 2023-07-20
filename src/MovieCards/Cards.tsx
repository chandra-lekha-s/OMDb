import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "./cardStyles.css";

interface CardCategory {
  category: string;
  title: string;
  scrollType: string;
}

const Cards = ({ category, title, scrollType }: CardCategory) => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<any[]>([]);
  const img_url = "https://image.tmdb.org/t/p/w185";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${category}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${page}`
        );
        const newMovies = response.data.results.slice(0, 20); // Adjust the limit as needed
        setMovies((prevMovies) => [...prevMovies, ...newMovies]);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [category, page]);

  const handleScroll = () => {
    if (scrollType === "horizontal") {
      const { scrollLeft, scrollWidth, clientWidth } = document.documentElement;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 5; // Adjust the threshold as needed

      if (isAtEnd) {
        setPage((prevPage) => prevPage + 1);
      }
    } else {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const isAtBottom = scrollTop + 4000 >= scrollHeight - 1; // Adjust the threshold as needed
      if (isAtBottom) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <h2 className="p-3 text-white" style={{ textAlign: "left" }}>
        {title.toString()}
      </h2>
      <div className="container">
        <div
          className={
            scrollType.toString() === "horizontal"
              ? "row flex-nowrap overflow-auto hide-scrollbar"
              : "row"
          }
        >
          {movies.map((card, index) => (
            <div
              className="col-lg-2 col-md-6 col-sm-5 col-xs-12 p-3"
              key={index}
            >
              <div className="card">
                <div className="card-image">
                  <img
                    src={img_url + card.poster_path}
                    className="card-img-top"
                    alt={card.original_title}
                  />

                  <Link
                    to={`/details/${card.id}`}
                    onClick={() => {
                      window.location.href = `/details/${card.id}`;
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <div className="overlay">
                      <h6 className="card-title">{card.original_title}</h6>
                      <p className="card-description">
                        {card.release_date?.slice(0, 4)}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
