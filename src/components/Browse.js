import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GeminiSearch from "./GeminiSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGeminiSearch = useSelector(
    (store) => store.gemini.showGeminiSearch
  );
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {showGeminiSearch ? (
        <GeminiSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
