import s from "./MovieInfo.module.css";

const MovieInfo = ({ movie }) => {
  return (
    <div className={s.wrapper}>
      <img
        className={s.image}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className={s.information}>
        <h2 className={s.title}>
          {movie.title} ({movie.release_date.split("-")[0]})
        </h2>
        <p className={s.text}>
          User Score: {Math.round(movie.vote_average * 10)}%
        </p>
        <h3 className={s.subtitle}>Overview</h3>
        <p className={s.text}>{movie.overview}</p>
        <h3 className={s.subtitle}>Genres</h3>
        <div className={s.genres}>
          {movie.genres.map((genre) => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
