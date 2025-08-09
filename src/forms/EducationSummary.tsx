import { useSelector, useDispatch } from "react-redux";
import { removeEntry } from "../store/slices/educationSlice";
import { type RootState } from "../store/store";
import EducationForm from "./Education";
import { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import "./styles/EducationSummary.scss";

const EducationSummary = () => {
  const dispatch = useDispatch();
  const { entries } = useSelector((state: RootState) => state.education);
  const [edit, setEdit] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const renderEntries = () => {
    return (
      <div className="EducationSummary__entries">
        {entries.map((x, i) => {
          return (
            <div className="EducationSummary__entries__entry" key={i}>
              <div className="EducationSummary__entries__entry__id">
                <p>{i + 1}</p>
              </div>
              <div className="EducationSummary__entries__entry__data">
                <h2>
                  {x.diploma} - {x.facility}
                </h2>
                <p>
                  {x.city} | {x.graduation}
                </p>
              </div>
              <div className="EducationSummary__entries__entry__buttons">
                <button
                  id="edit"
                  onClick={(e) => {
                    e.preventDefault();
                    setEdit(x.id);
                  }}
                >
                  <MdOutlineModeEditOutline />
                </button>
                <button
                  id="delete"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(removeEntry(x.id));
                  }}
                >
                  <MdOutlineDeleteOutline />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const handleCloseForm = () => {
      setOpen(false);
      setEdit(null);
  };

  return (
    <div className="EducationSummary">
      {(entries.length === 0 || edit || open) && (
        <EducationForm
          id={edit}
          closeEdit={handleCloseForm}
        />
      )}
      {!open && entries.length !== 0 && (
        <button className="EducationSummary__add-btn" onClick={() => setOpen(true)}>
          <CiCirclePlus />
        </button>
      )}
      {renderEntries()}
    </div>
  );
};

export default EducationSummary;
