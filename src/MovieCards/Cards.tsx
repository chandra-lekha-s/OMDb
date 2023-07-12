import React from "react";
import "./cardStyles.css";
import NewMovieLists from "../FetchData/NewMovieList";

interface CardCategory {
  category: string;
  title: string;
  scrollType: string;
}

const Cards = ({ category, title, scrollType }: CardCategory) => {
  const cardData = NewMovieLists(category.toString());
  const img_url = "https://image.tmdb.org/t/p/w185";

  return (
    <>
      <h2 className="p-3 text-white" style={{ textAlign: "left" }}>
        {title.toString()}
      </h2>
      <div className="container">
        <div
          className={
            scrollType.toString() == "horizontal"
              ? "row flex-nowrap overflow-auto hide-scrollbar"
              : "row"
          }
        >
          {cardData.map((card, index) => (
            <div className="col-lg-2 col-md-6 col-sm-12 p-3" key={index}>
              <div
                className="card"
                style={{ width: "12rem", padding: 0, backgroundColor: "black" }}
              >
                <div className="card-image">
                  <img
                    src={img_url + card.poster_path}
                    className="card-img-top"
                    alt={card.original_title}
                  />
                  <div className="overlay">
                    <h6 className="card-title">{card.original_title}</h6>
                    <p className="card-description">
                      {card.release_date.slice(0, 4)}
                    </p>
                  </div>
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
