import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Option } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  //getting data from TMDB API and updating the store
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_Option
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    if (!popularMovies) getPopularMovies();
  }, []);
};

export default usePopularMovies;
