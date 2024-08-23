import MoviesCards from "./MoviesCards";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-3xl text-white py-4">{title}</h1>
      <div className="flex overflow-x-scroll scroll-smooth">
        <div className="flex">
          {movies?.map((movie) => (
            <MoviesCards
              key={movie.id}
              posterPath={movie.poster_path}
              videoKey={movie.key}
              title={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
