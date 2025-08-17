import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { addEntry, updateEntry } from "../store/slices/experienceSlice";
import { type RootState } from "../store/store";
import { type Experience } from "../types/StoreTypes";
import { FaRegSave } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ExperienceLocation } from "../types/Types";
import "./styles/Experience.scss";

interface IProps {
  id?: number | null;
  closeEdit?: () => void;
}

//TODO: if id is undefined then don't try to find an entry
//simply render the form with a save button
const INITIAL_STATE: Experience = {
  id: -1,
  start: "",
  end: "",
  employer: "",
  title: "",
  location: ExperienceLocation.Hybrid,
  description: "",
};
const ExperienceForm = ({ id, closeEdit }: IProps) => {
  const { entries } = useSelector((state: RootState) => state.experience);
  const entry = entries.find((x) => x.id === id);
  const dispatch = useDispatch();
  const [localEntry, setLocalEntry] = useState(INITIAL_STATE);

  useEffect(() => {
    if (id && entry) {
      setLocalEntry(entry);
    }
  }, []);

  const experienceLocationValues = Object.values(ExperienceLocation);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLocalEntry({ ...localEntry, [name]: value });
  };

  const renderFormFields = ({
    start,
    end,
    employer,
    title,
    location,
    description,
  }: Experience) => {
    // TODO: add placeholders for each input field
    return (
      <div>
        <div>
          {/* TODO: validate this to allow only month and year */}
          <label htmlFor="start">Start</label>
          <Field
            id="start"
            name="start"
            type="text"
            onChange={handleChange}
            value={start}
            autoComplete="off"
          />
        </div>
        <div>
          {/* TODO: validate this to allow only month and year */}
          <label htmlFor="end">End</label>
          <Field
            id="end"
            name="end"
            type="text"
            onChange={handleChange}
            value={end}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="employer">Employer</label>
          <Field
            id="employer"
            name="employer"
            type="text"
            onChange={handleChange}
            value={employer}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <Field
            id="title"
            name="title"
            type="text"
            onChange={handleChange}
            value={title}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <Field
            id="description"
            name="description"
            type="text"
            onChange={handleChange}
            value={description}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <Field
            id="location"
            name="location"
            onChange={handleChange}
            as="select"
            autoComplete="off"
          >
            <option value={location}>{location}</option>
            {experienceLocationValues.map((x, i) => (
              <option key={i} value={x}>
                {x}
              </option>
            ))}
          </Field>
        </div>
      </div>
    );
  };

  const handleSave = (e) => {
    if (!id) {
      dispatch(addEntry(localEntry));
      setLocalEntry(INITIAL_STATE);
    } else {
      dispatch(updateEntry(localEntry));
   }

    if (closeEdit !== undefined) {
      closeEdit();
    }
  };

  return (
    <div className="ExperienceForm">
      <h1>Experience</h1>
      <Formik
        initialValues={entries}
        onSubmit={(values) => {
          //TODO: should i use the values instead of the local state?
          handleSave();
        }}
      >
        <Form className="ExperienceForm__form">
          {renderFormFields(localEntry)}
          <button type="submit">
            Save <FaRegSave />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ExperienceForm;
