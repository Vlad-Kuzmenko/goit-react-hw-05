import s from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/tmdvApi";
import Loader from "../Loader/Loader";
import ActorsCast from "../ActorsCast/ActorsCast";

const MovieCast = () => {
  const { movieId } = useParams();
  const [actorsList, setActorsList] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCast = async () => {
      setLoading(true);
      try {
        const { data } = await getMovieCast(movieId);
        setActorsList(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
        console.log(actorsList);
        console.log(data);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {!loading &&
        !error &&
        (actorsList && actorsList.length > 0 ? (
          <ActorsCast actorsList={actorsList} />
        ) : (
          <p>We don't have any casts for this movie</p>
        ))}
      {loading && <Loader />}
      {error && (
        <p> `Something went wrong! ${error}. Please try again later`</p>
      )}
    </>
  );
};

export default MovieCast;
