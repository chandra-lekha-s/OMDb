import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./HeaderAndFooter/Header";
import MovieCarousel from "./MovieCarousel/CarouselData";
import NewCard from "./MovieCards/Cards";
import RoutingConfig from "./RoutingConfig";

function App() {
  return (
    <div className="App">
      <RoutingConfig />
    </div>
  );
}

export default App;
