import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Option } from "../utils/constant";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  //getting data from TMDB API and updating the store
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_Option
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    if (!upcomingMovies) getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
