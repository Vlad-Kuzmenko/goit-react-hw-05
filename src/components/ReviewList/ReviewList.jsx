import s from "./ReviewList.module.css";

const ReviewList = ({ reviewList }) => {
  return (
    <ul>
      {reviewList.map((review) => (
        <li key={review.id}>
          <h3 className={s.title}>Author: {review.author}</h3>
          <p className={s.text}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
