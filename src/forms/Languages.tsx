import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEntry, removeEntry } from "../store/slices/languagesSlice";
import { type RootState } from "../store/store";
import { IoClose } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import "./styles/Languages.scss";

const LanguagesForm = () => {
  const languages = useSelector((state: RootState) => state.languages.entries);
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

  const removeLang = (id: number) => {
    dispatch(removeEntry(id));
  };

  const renderLanguageField = (skill, i) => {
    return (
      <div key={i} className="LanguagesForm__entries__entry">
        <p>{skill.name}</p>
        <button onClick={() => removeLang(skill.id)}>
          <IoClose />
        </button>
      </div>
    );
  };

  return (
    <div className="LanguagesForm">
      <h1>Languages</h1>
      <Formik initialValues={languages} onSubmit={(e) => e.preventDefault()}>
        <Form className="LanguagesForm__form">
          <div>
            <Field
              name="language"
              onChange={(e) => handleChange(e)}
              value={input}
              autoComplete="off"
              placeholder={"English"}
            />
            <button type="submit" onClick={() => handleSubmit()}>
              <CiCirclePlus />
            </button>
          </div>
        </Form>
      </Formik>
      <div className="LanguagesForm__entries">{languages.map((lang, i) => renderLanguageField(lang, i))}</div>
    </div>
  );
};

export default LanguagesForm;
