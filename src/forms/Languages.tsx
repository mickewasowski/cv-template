import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addEntry,
  removeEntry,
} from "../store/slices/languagesSlice";
import { type RootState } from "../store/store";
import { IoClose } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";

const LanguagesForm = () => {
  const languages = useSelector((state: RootState) => state.languages.entries);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    dispatch(addEntry({id: -1, name: input}))
    setInput('');
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
      <div key={i}>
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
          <Field name="language" onChange={(e) => handleChange(e)} value={input} autoComplete="off"/>
          <button type="submit" onClick={() => handleSubmit()}>
            <CiCirclePlus />
          </button>
          <div>{languages.map((lang, i) => renderLanguageField(lang, i))}</div>
        </Form>
      </Formik>
    </div>
  );
};

export default LanguagesForm;
