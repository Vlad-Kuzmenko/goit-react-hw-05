import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReview } from "../../services/tmdvApi";
import ReviewList from "../ReviewList/ReviewList";
import Loader from "../Loader/Loader";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviewList, setReviewList] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getReview = async () => {
      setLoading(true);
      try {
        const { data } = await getMovieReview(movieId);
        setReviewList(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getReview();
  }, [movieId]);

  return (
    <>
      {reviewList?.length ? (
        <ReviewList reviewList={reviewList} />
      ) : (
        <p> `We don't have any reviews for this movie`</p>
      )}

      {loading && <Loader />}
      {error && (
        <p> `Something went wrong! ${error}. Please try again later`</p>
      )}
    </>
  );
};

export default MovieReviews;
