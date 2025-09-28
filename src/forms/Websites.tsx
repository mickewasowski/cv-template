import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { addEntry, removeEntry } from "../store/slices/websitesSlice";
import { type RootState } from "../store/store";
import { type Website, WebsiteType } from "../types/StoreTypes";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import "./styles/Websites.scss";
import { renderIcon } from "../Utils";

const INITIAL_STATE: Website = {
  id: -1,
  name: "",
  type: WebsiteType.LinkedIn,
};
const WebsitesForm = () => {
  const websites = useSelector((state: RootState) => state.websites.entries);
  const dispatch = useDispatch();
  const [localEntry, setLocalEntry] = useState(INITIAL_STATE);

  const websiteTypesValues = Object.values(WebsiteType);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLocalEntry({ ...localEntry, [name]: value });
  };

  const renderFormFields = ({ name, type }: Website) => {
    // TODO: add placeholders for each input field
    return (
      <>
        <div>
          <label htmlFor="type">Type</label>
          <Field
            id="type"
            name="type"
            onChange={handleChange}
            as="select"
            autoComplete="off"
          >
            <option value={type}>{type}</option>
            {websiteTypesValues.map((x, i) => (
              <option key={i} value={x}>
                {x}
              </option>
            ))}
          </Field>
        </div>
        <div>
          {/* TODO: validate this to allow only month and year */}
          <label htmlFor="name">Url</label>
          <Field
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={name}
            autoComplete="off"
            placeholder={"www.linkedin.com/myuser"}
          />
        </div>
      </>
    );
  };

  const renderEntries = ({ id, name, type }: Website, index: number) => {
    const Icon = renderIcon(type);

    return (
      <div key={index}>
        <div>
          <Icon />
          <p>{name}</p>
        </div>
        <div>
          <button onClick={() => dispatch(removeEntry(id))}>
            <IoClose />
          </button>
        </div>
      </div>
    );
  };

  const handleSave = () => {
    dispatch(addEntry(localEntry));
  };

  return (
    <div className="WebsitesForm">
      <h1>Websites</h1>
      <Formik
        initialValues={websites}
        onSubmit={(values) => {
          //TODO: should i use the values instead of the local state?
          handleSave();
        }}
      >
        <Form className="WebsitesForm__form">
          {renderFormFields(localEntry)}
          <button type="submit">Save</button>
        </Form>
      </Formik>
      <div>{websites.map((w, i) => renderEntries(w, i))}</div>
    </div>
  );
};

export default WebsitesForm;
