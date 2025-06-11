import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";

// const NotFoundPage = () => {
//   return (
//     <Section>
//       <Container>
//         <h1 className={s.title}>404</h1>
//         <p className={s.text}>Not Found</p>
//         <Link className={s.button} to={"/"}>
//           Go Home
//         </Link>
//       </Container>
//     </Section>
//   );
// };

// export default NotFoundPage;

const NotFound = () => {
  return (
    <Section>
      <div className={s.backgroundOverlay}>
        <Container>
          <div className={s.wrapper}>
            <h1 className={s.title}>404</h1>
            <p className={s.text}>Oops! Page not found.</p>
            <p className={s.subtext}>
              The page you’re looking for doesn’t exist or was moved.
            </p>
            <Link className={s.button} to="/">
              Go Home
            </Link>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default NotFound;
