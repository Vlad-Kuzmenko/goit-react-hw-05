import { useState } from "react";
import toast from "react-hot-toast";
import s from "./Form.module.css";

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return toast.error("Input some text");
    onSubmit(value);

    setValue("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        onChange={handleChange}
        value={value}
      />
      <button className={s.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
