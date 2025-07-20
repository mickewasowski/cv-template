import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { updateEntry } from "../store/slices/contactsSlice";
import { type RootState } from "../store/store";
import "./styles/ContactsForm.scss";

const ContactsForm = () => {
  const contacts = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {id, value} = e.target;
    dispatch(updateEntry({[id]: value}));
  };

  return (
    <div className="ContactsForm">
      <h1>Contacts</h1>
      <Formik initialValues={contacts} onSubmit={(e) => e.preventDefault()}>
        <Form className="ContactsForm__form">
          <div>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="text"
              placeholder="hane@acme.com"
              onChange={handleChange}
              value={contacts.email}
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone number</label>
            <Field
              id="phoneNumber"
              name="phone"
              type="tel"
              placeholder="+359 777 88 9966"
              onChange={handleChange}
              value={contacts.phoneNumber}
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <Field
              id="address"
              name="address"
              type="text"
              placeholder="Sofia, Bulgaria"
              onChange={handleChange}
              value={contacts.address}
              autoComplete="off"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactsForm;
