import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Option } from "../utils/constant";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  //getting data from TMDB API and updating the store
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_Option
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    if (!topRatedMovies) getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
