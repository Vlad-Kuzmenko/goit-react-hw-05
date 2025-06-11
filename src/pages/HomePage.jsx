import { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import MovieList from "../components/MovieList/MovieList";
import Section from "../components/Section/Section";
import Loader from "../components/Loader/Loader";
import { getMovie } from "../services/tmdvApi";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      try {
        const { data } = await getMovie();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);
  return (
    <>
      <Section>
        <Container>
          <h1>Trending today</h1>
          {movies && <MovieList movies={movies} />}
          {loading && <Loader />}
          {error && (
            <p>`Something went wrong! ${error}. Please try again later`</p>
          )}
        </Container>
      </Section>
    </>
  );
};
export default HomePage;
