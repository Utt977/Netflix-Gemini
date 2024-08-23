import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-52 z-30 relative pl-8">
        <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MoviesList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MoviesList title={"Popular"} movies={movies.popularMovies} />
        <MoviesList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <MoviesList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
