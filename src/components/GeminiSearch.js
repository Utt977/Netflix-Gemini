import GeminiSearchPage from "./GeminiSearchPage";
import GeminiMoviesSuggestion from "./GeminiMoviesSuggestion";
import { BG_IMG } from "../utils/constant";

const GeminiSearch = () => {
  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <img
          src={BG_IMG}
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative z-10">
        <GeminiSearchPage />
        <GeminiMoviesSuggestion />
      </div>
    </div>
  );
};

export default GeminiSearch;
