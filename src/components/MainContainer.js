import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  //movies not be null
  if (!movies) return;
  const mainMovies = movies[0];
 

  const {original_title, overview, id} = mainMovies;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId = {id} />
    </div>
  );
};

export default MainContainer;
