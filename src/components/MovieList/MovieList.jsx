import s from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              className={s.link}
              state={location}
              to={`/movies/${movie.id}`}
            >
              <p className={s.text}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
