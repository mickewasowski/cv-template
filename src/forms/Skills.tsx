import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addEntry,
  removeEntry,
} from "../store/slices/skillsSlice";
import { type RootState } from "../store/store";
import { IoClose } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";

const SkillsForm = () => {
  const skills = useSelector((state: RootState) => state.skills.entries);
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

  const removeSkill = (id: number) => {
    dispatch(removeEntry(id));
  };

  const renderSkillField = (skill, i) => {
    return (
      <div key={i}>
        <p>{skill.name}</p>
        <button onClick={() => removeSkill(skill.id)}>
          <IoClose />
        </button>
      </div>
    );
  };

  return (
    <div className="SkillsForm">
      <h1>Skills</h1>
      <Formik initialValues={skills} onSubmit={(e) => e.preventDefault()}>
        <Form className="SkillsForm__form">
          <Field name="skill" onChange={(e) => handleChange(e)} value={input} autoComplete="off"/>
          <button type="submit" onClick={() => handleSubmit()}>
            <CiCirclePlus />
          </button>
          <div>{skills.map((skill, i) => renderSkillField(skill, i))}</div>
        </Form>
      </Formik>
    </div>
  );
};

export default SkillsForm;
