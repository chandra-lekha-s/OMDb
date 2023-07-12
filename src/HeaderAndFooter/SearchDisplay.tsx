import Movie from "./IMovie";

const SearchDisplay = (movies: Movie[]) => {
  console.log(movies);
  console.log(typeof movies);
  console.log(movies[0]);
  return (
    // {movies.map((movie : any,index:number)=>
    //     <p>{movie}</p>)}
    <p>HIii</p>
  );
};
export default SearchDisplay;
