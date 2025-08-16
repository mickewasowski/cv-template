import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { updateEntry } from "../store/slices/headerSlice";
import { type RootState } from "../store/store";
import { useRef } from "react";
import './styles/HeaderForm.scss';

//TODO: render the image updload only if the chosen template supports images
const HeaderForm = () => {
  const header = useSelector((state: RootState) => state.header);
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { id, value, checked, files } = e.target;
    let input;

    switch (id) {
      case "initials": {
        input = checked;
        dispatch(updateEntry({ [id]: input }));
        break;
      }
      case "image": {
        const file = files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          input = reader.result;
          dispatch(updateEntry({ [id]: input }));
        };
        reader.readAsDataURL(file);
        break;
      }
      default: {
        input = value;
        dispatch(updateEntry({ [id]: input }));
        break;
      }
    }
  };

  return (
    <div className="HeaderForm">
      <h1>About me</h1>
      <Formik initialValues={header} onSubmit={(e) => e.preventDefault()}>
        <Form className="HeaderForm__form">
          <div>
            <label htmlFor="name">Full name</label>
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="Jane Doe"
              onChange={handleChange}
              value={header.name}
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <Field
              id="title"
              name="title"
              type="text"
              placeholder="Senior Chief of Staff"
              onChange={handleChange}
              value={header.title}
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="summary">Description about me</label>
            <Field
              id="summary"
              name="summary"
              type="text"
              placeholder="Young and driven..."
              onChange={handleChange}
              value={header.summary}
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="image">Image upload</label>
            <Field
              ref={fileInputRef}
              id="image"
              name="image"
              type="file"
              onChange={handleChange}
              accept="image/*"
              autoComplete="off"
              className="hidden-file-upload"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="file-change-btn"
            >
              {header.image ? "Change" : "Upload"}
            </button>
            {header.image && (
              <img
                src={header.image}
                alt="Uploaded image"
                width={100}
                height={100}
              />
            )}
          </div>
          <div>
            <label htmlFor="initials">Initials</label>
            <Field
              id="initials"
              name="initials"
              type="checkbox"
              onChange={handleChange}
              checked={header.initials}
              autoComplete="off"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default HeaderForm;
