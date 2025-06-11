import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import s from "./ActorsCast.module.css";

const ActorsCast = ({ actorsList }) => {
  return (
    <Grid>
      {actorsList
        .filter((actor) => actor.profile_path !== null)
        .map((actor) => (
          <GridItem key={actor.id}>
            <img
              className={s.image}
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </GridItem>
        ))}
    </Grid>
  );
};

export default ActorsCast;
