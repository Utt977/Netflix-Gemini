import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import model from "../utils/generativeai";
import { API_Option } from "../utils/constant";
import { addGeminiMovieResults } from "../utils/geminiSlice";

const GeminiSearchPage = () => {
  const keyLang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchTMDBMovies = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          movie
        )}&include_adult=false&language=en-US&page=1`,
        API_Option
      );
      const json = await response.json();
      return json.results;
    } catch (error) {
      console.error("Error fetching TMDB movies:", error);
      return [];
    }
  };

  const handleGeminiSearch = async () => {
    const searchQuery = searchText.current.value;
    const geminiQuery =
      `Act as a movie recommendation system and suggest some movies for the query: "${searchQuery}". ` +
      `Only give me 5 movies, comma-separated like the example given ahead. Example: Tiger 3, Fighter, All India Rank, Tejas, Pathan`;

    const geminiResults = await model.generateContent(geminiQuery);

    const geminiMovies = geminiResults.response.text().split(",");

    if (!geminiMovies || geminiMovies.length === 0) {
      console.error("No movie suggestions received from Gemini.");
      return;
    }

    const promiseArray = geminiMovies.map((movie) => searchTMDBMovies(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGeminiMovieResults({
        movieNames: geminiMovies,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div className="flex justify-center pt-[6%]">
      <form
        className="bg-black grid grid-cols-12 w-1/2 rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          handleGeminiSearch();
        }}
      >
        <input
          type="text"
          ref={searchText}
          placeholder={lang[keyLang].inputPlaceholder}
          className="col-span-9 p-4 m-4"
        />
        <button
          type="button"
          className="py-4 px-2 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGeminiSearch}
        >
          {lang[keyLang].search}
        </button>
      </form>
    </div>
  );
};

export default GeminiSearchPage;
