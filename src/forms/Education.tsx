import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { addEntry, updateEntry } from "../store/slices/educationSlice";
import { type RootState } from "../store/store";
import { Diploma } from "../types/Types";
import { type Education } from "../types/StoreTypes";
import { FaRegSave } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./styles/Education.scss";

interface IProps {
  id?: number;
  closeEdit?: () => void;
}

//TODO: if id is undefined then don't try to find an entry
//simply render the form with a save button
const INITIAL_STATE: Education = {
  id: -1,
  start: "",
  graduation: "",
  facility: "",
  city: "",
  diploma: Diploma.HighSchool,
};
const EducationForm = ({ id, closeEdit }: IProps) => {
  const { entries } = useSelector((state: RootState) => state.education);
  const entry = entries.find((x) => x.id === id);
  const dispatch = useDispatch();
  const [localEntry, setLocalEntry] = useState(INITIAL_STATE);

  useEffect(() => {
    if (id) {
      setLocalEntry(entry);
    }
  }, [id]);

  const diplomaValues = Object.values(Diploma);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLocalEntry({ ...localEntry, [name]: value });
  };

  const renderFormFields = ({
    start,
    graduation,
    facility,
    city,
    diploma,
  }: Education) => {
    // TODO: add placeholders for each input field
    return (
      <>
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
          <label htmlFor="graduation">Graduation</label>
          <Field
            id="graduation"
            name="graduation"
            type="text"
            onChange={handleChange}
            value={graduation}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="facility">Institution</label>
          <Field
            id="facility"
            name="facility"
            type="text"
            onChange={handleChange}
            value={facility}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="city">Institution Location</label>
          <Field
            id="city"
            name="city"
            type="text"
            onChange={handleChange}
            value={city}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="diploma">Diploma</label>
          <Field
            id="diploma"
            name="diploma"
            onChange={handleChange}
            as="select"
            autoComplete="off"
          >
            <option value={diploma}>{diploma}</option>
            {diplomaValues.map((x, i) => (
              <option key={i} value={x}>
                {x}
              </option>
            ))}
          </Field>
        </div>
      </>
    );
  };

  const handleSave = (e) => {
    if (!id) {
      dispatch(addEntry(localEntry));
      setLocalEntry(INITIAL_STATE);
    } else {
      dispatch(updateEntry(localEntry));
      closeEdit();
    }
  };

  return (
    <div className="EducationForm">
      <h1>Education</h1>
      <Formik
        initialValues={entries}
        onSubmit={(values) => {
          //TODO: should i use the values instead of the local state?
          handleSave();
        }}
      >
        <Form className="EducationForm__form">
          {renderFormFields(localEntry)}
          <button type="submit">
            Save <FaRegSave />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default EducationForm;
