import { useSelector, useDispatch } from "react-redux";
import { removeEntry } from "../store/slices/educationSlice";
import { type RootState } from "../store/store";
import ExperienceForm from "./Experience";
import { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const ExperienceSummary = () => {
  const dispatch = useDispatch();
  const { entries } = useSelector((state: RootState) => state.experience);
  const [edit, setEdit] = useState<number | null>(null);
  const [openForm, setOpenForm] = useState(false);

  const renderEntries = () => {
    return (
      <div className="ExperienceSummary__entries">
        {entries.map((x, i) => {
          return (
            <div className="ExperienceSummary__entries__entry" key={i}>
              <div className="ExperienceSummary__entries__entry__id">
                <p>{x.id}</p>
              </div>
              <div className="EducationSummary__entries__entry__data">
                <h2>
                  {x.employer} - {x.title}
                </h2>
                <p>
                  {x.location}
                </p>
                <p>
                  {x.description}
                </p>
                <p>
                  {x.start} - {x.end}
                </p>
              </div>
              <div className="ExperienceSummary__entries__entry__buttons">
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

  const renderAddButton = () => {
      return <button onClick={() => setOpenForm(!openForm)}>
        {!openForm ? <CiCirclePlus /> : <IoClose />}
      </button>;
  };

  return (
    <div className="ExperienceSummary">
      {renderEntries()}
      {edit && <ExperienceForm id={edit} closeEdit={() => setEdit(null)}/>}
      {(!entries.length || openForm) && <ExperienceForm />}
      {renderAddButton()}
    </div>
  );
};

export default ExperienceSummary;
