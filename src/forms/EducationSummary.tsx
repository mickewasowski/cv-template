import { useSelector, useDispatch } from "react-redux";
import { removeEntry } from "../store/slices/educationSlice";
import { type RootState } from "../store/store";
import EducationForm from "./Education";
import { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const EducationSummary = () => {
  const dispatch = useDispatch();
  const { entries } = useSelector((state: RootState) => state.education);
  const [edit, setEdit] = useState<number | null>(null);

  const renderEntries = () => {
    return (
      <div className="EducationSummary__entries">
        {entries.map((x, i) => {
          return (
            <div className="EducationSummary__entries__entry" key={i}>
              <div className="EducationSummary__entries__entry__id">
                <p>{x.id}</p>
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
                <button id="edit" onClick={(e) => {
                  e.preventDefault();
                  setEdit(x.id);
                }}>
                  <MdOutlineModeEditOutline />
                </button>
                <button id="delete" onClick={(e) => {
                  e.preventDefault();
                  dispatch(removeEntry(x.id));
                }}>
                  <MdOutlineDeleteOutline />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="EducationSummary">
      {(entries.length === 0 || edit) && (
        <EducationForm id={edit} closeEdit={() => setEdit(null)}/>
      )}
      {renderEntries()}
    </div>
  );
};

export default EducationSummary;
