import { Link, Outlet, useLocation, useParams } from "react-router";
import s from "./MovieDetailsPage.module.css";
import { getMovieDetails } from "../../services/tmdvApi";
import { useState, useEffect, useRef } from "react";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import Section from "../../components/Section/Section";
import Loader from "../../components/Loader/Loader";
import Container from "../../components/Container/Container";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const goBackLink = useRef(location.state || "/movies");

  useEffect(() => {
    const getMovieInfo = async () => {
      setLoading(true);
      try {
        const { data } = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovieInfo();
  }, [movieId]);

  return (
    <Section>
      <Container>
        <Link to={goBackLink.current} className={s.link}>
          Go Back
        </Link>
        {movie && <MovieInfo movie={movie} />}
        {loading && <Loader />}
        {error && (
          <p>`Something went wrong! ${error}. Please try again later`</p>
        )}
        <div className={s.info}>
          <h2 className={s.infoTitle}>Additional information</h2>
          <div className={s.linksList}>
            <Link className={s.link} to={"cast"}>
              Cast
            </Link>
            <Link className={s.link} to={"reviews"}>
              Reviews
            </Link>
          </div>
        </div>
        <Outlet />
      </Container>
    </Section>
  );
};

export default MovieDetailsPage;
