import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { addEntry, removeEntry } from "../store/slices/websitesSlice";
import { type RootState } from "../store/store";
import { type Website, WebsiteType } from "../types/StoreTypes";
import { useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

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

  const renderIcon = (x: WebsiteType) => {
    switch (x) {
      case WebsiteType.LinkedIn: {
        return <CiLinkedin />;
      }
      case WebsiteType.Github: {
        return <FaGithub />;
      }
      default: {
        return <TbWorldWww />;
      }
    }
  };

  const renderFormFields = ({ name, type }: Website) => {
    // TODO: add placeholders for each input field
    return (
      <div>
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
          />
        </div>
        <div>
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
        </div>
      </div>
    );
  };

  const renderEntries = ({ id, name, type }: Website, index: number) => {
    return (
      <div key={index}>
        <div>
          {renderIcon(type)}
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
