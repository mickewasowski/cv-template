import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEntry, removeEntry } from "../store/slices/hobbiesSlice";
import { type RootState } from "../store/store";
import { IoClose } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import "./styles/Hobbies.scss";

const HobbiesForm = () => {
  const hobbies = useSelector((state: RootState) => state.hobbies.entries);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.length === 0) {
      return;
    }
    dispatch(addEntry({ id: -1, name: input }));
    setInput("");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const removeHobby = (id: number) => {
    dispatch(removeEntry(id));
  };

  const renderHobbyField = (skill, i) => {
    return (
      <div key={i} className="HobbiesForm__entries__entry">
        <p>{skill.name}</p>
        <button onClick={() => removeHobby(skill.id)}>
          <IoClose />
        </button>
      </div>
    );
  };

  return (
    <div className="HobbiesForm">
      <h1>Hobbies</h1>
      <Formik initialValues={hobbies} onSubmit={(e) => e.preventDefault()}>
        <Form className="HobbiesForm__form">
          <div>
            <Field
              name="hobby"
              onChange={(e) => handleChange(e)}
              value={input}
              autoComplete="off"
              placeholder={"Hiking"}
            />
            <button type="submit" onClick={() => handleSubmit()}>
              <CiCirclePlus />
            </button>
          </div>
        </Form>
      </Formik>
      <div className="HobbiesForm__entries">{hobbies.map((hobby, i) => renderHobbyField(hobby, i))}</div>
    </div>
  );
};

export default HobbiesForm;
