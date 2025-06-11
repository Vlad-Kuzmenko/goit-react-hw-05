import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByQuery } from "../services/tmdvApi";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import Form from "../components/Form/Form";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) return;

    const getMoviesQuery = async () => {
      setLoading(true);
      try {
        const { data } = await getMoviesByQuery(query);
        if (data.total_results === 0) {
          setIsEmpty(true);
          return;
        }
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getMoviesQuery();
  }, [query]);

  const handleSubmit = (query) => {
    setQuery(query);
    setError(null);
    setIsEmpty(false);
    setSearchParams({ query });
  };

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={handleSubmit} />
          {isEmpty && <p>`Sorry! Not found`</p>}
          <MovieList movies={movies} />
          {loading && <Loader />}
          {error && (
            <p>`Something went wrong! ${error}. Please try again later`</p>
          )}
        </Container>
      </Section>
    </>
  );
};

export default MoviesPage;
