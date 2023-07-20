import "bootstrap/dist/css/bootstrap.css";
import Header from "./HeaderAndFooter/Header";
import MovieCarousel from "./MovieCarousel/CarouselData";
import NewCard from "./MovieCards/Cards";

function Home() {
  return (
    <>
      <MovieCarousel setLimit={7} />
      <NewCard category="upcoming" title="Up coming" scrollType="horizontal" />
      <NewCard category="popular" title="Popular" scrollType="horizontal" />
      <NewCard category="top_rated" title="Top Rated" scrollType="vertical" />
    </>
  );
}

export default Home;
