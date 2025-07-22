import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { updateEntry } from "../store/slices/summarySlice";
import { type RootState } from "../store/store";

const SummaryForm = () => {
  const summary = useSelector((state: RootState) => state.summary);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateEntry(e.target.value));
  };

  return (
    <div className="SummaryForm">
      <h1>Summary</h1>
      <Formik initialValues={summary} onSubmit={(e) => e.preventDefault()}>
        <Form className="SummaryForm__form">
          <div>
            <label htmlFor="summary">Description about me</label>
            <Field
              id="summary"
              name="summary"
              type="text"
              placeholder="Young and driven..."
              onChange={handleChange}
              value={summary.summary}
              autoComplete="off"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SummaryForm;
