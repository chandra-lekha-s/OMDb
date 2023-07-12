import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./HeaderAndFooter/Header";
import MovieCarousel from "./MovieCarousel/CarouselData";
import NewCard from "./MovieCards/Cards";

function App() {
  return (
    <div className="App">
      <Header />
      <MovieCarousel setLimit={5} />
      <NewCard category="upcoming" title="Up coming" scrollType="horizontal" />
      <NewCard category="popular" title="Popular" scrollType="horizontal" />
      <NewCard category="top_rated" title="Top Rated" scrollType="vertical" />
    </div>
  );
}

export default App;
