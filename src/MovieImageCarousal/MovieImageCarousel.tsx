import "./MovieImageCarousel.css";

const MovieImageCarousel = () => {
  const carouselItems = [
    {
      id: "item_1",
      className: "hideLeft",
      imageSrc:
        "https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg",
    },
    {
      id: "item_2",
      className: "prevLeftSecond",
      imageSrc:
        "https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg",
    },
    {
      id: "item_3",
      className: "prev",
      imageSrc:
        "https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg",
    },
    {
      id: "item_4",
      className: "selected",
      imageSrc:
        "https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg",
    },
    {
      id: "item_5",
      className: "next",
      imageSrc:
        "https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg",
    },
    {
      id: "item_6",
      className: "nextRightSecond",
      imageSrc:
        "https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg",
    },
    {
      id: "item_7",
      className: "hideRight",
      imageSrc:
        "https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg",
    },
    {
      id: "item_8",
      className: "hideRight",
      imageSrc:
        "https://lastfm.freetls.fastly.net/i/u/300x300/1f89759fa92b4c8f86cd7efac06f2d90.png",
    },
  ];

  return (
    <div>
      <main>
        <div id="carousel" className="carousel">
          {carouselItems.map((item) => (
            <div id={item.id} className={item.className}>
              <img src={item.imageSrc} />
            </div>
          ))}
        </div>

        <div className="buttons">
          <button id="prev">Prev</button>
          <button id="next">Next</button>
        </div>
      </main>
    </div>
  );
};

export default MovieImageCarousel;
