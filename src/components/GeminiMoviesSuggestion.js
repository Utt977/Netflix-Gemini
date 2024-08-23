import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GeminiMoviesSuggestion = () => {
  const { moviesNames, moviesResults } = useSelector((store) => store.gemini);
  if (!moviesResults) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {moviesNames.map((movieName, index) => (
        <MoviesList
          key={movieName}
          title={movieName}
          movies={moviesResults[index]}
        />
      ))}
    </div>
  );
};

export default GeminiMoviesSuggestion;
