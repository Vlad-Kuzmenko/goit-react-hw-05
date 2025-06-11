import { HashLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.backdrop}>
      <HashLoader color="#ffa500" height={50} width={50} />
    </div>
  );
};

export default Loader;
