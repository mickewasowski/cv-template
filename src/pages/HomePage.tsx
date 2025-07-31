import { useState } from "react";
import ContactsForm from "../forms/Contacts";
import EducationSummary from "../forms/EducationSummary";
import ExperienceSummary from "../forms/ExperienceSummary";
import HeaderForm from "../forms/Header";
import HobbiesForm from "../forms/Hobbies";
import LanguagesForm from "../forms/Languages";
import SkillsForm from "../forms/Skills";
import SummaryForm from "../forms/Summary";
import CollapsibleFormWrapper from "../forms/utils/CollapsableWrapper";
import WebsitesForm from "../forms/Websites";
import "./styles/HomePage.scss";

enum FormData {
  Header,
  Contacts,
  Summary,
  Education,
  Experience,
  Skills,
  Hobbies,
  Languages,
  Websites,
}

const HomePage = () => {
  const [renderForm, setRenderForm] = useState<FormData>(FormData.Header);

  const renderDataForm = () => {
    switch (renderForm) {
      case FormData.Header: {
        return <HeaderForm />;
      }
      case FormData.Contacts: {
        return <ContactsForm />;
      }
      case FormData.Summary: {
        return <SummaryForm />;
      }
      case FormData.Education: {
        return <EducationSummary />;
      }
      case FormData.Experience: {
        return <ExperienceSummary />;
      }
      case FormData.Skills: {
        return <SkillsForm />;
      }
      case FormData.Hobbies: {
        return <HobbiesForm />;
      }
      case FormData.Languages: {
        return <LanguagesForm />;
      }
      case FormData.Websites: {
        return <WebsitesForm />;
      }
    }
  };

  const handleNextForm = () => {
    const enumValues = Object.values(FormData).filter(
      (x) => typeof x === "number",
    ) as number[];
    const maxIndex = Math.max(...enumValues);
    const nextState = renderForm + 1 > maxIndex ? renderForm : renderForm + 1;
    setRenderForm(nextState as FormData);
  };

  const renderProgressBar = () => {
    const formEnumKeyValues = Object.entries(FormData).filter(([key, value]) =>
      isNaN(Number(key)),
    );

    return (
      <>
        {formEnumKeyValues.map(([name, value]) => {
          const isActive = renderForm === value;
          return (
            <p
              className={`HomePage__sidebar__progress-bar__entry ${isActive ? "HomePage__sidebar__progress-bar__entry--active" : ""}`}
            >
              {name}
            </p>
          );
        })}
      </>
    );
  };

  return (
    <div className="HomePage">
      <div className="HomePage__sidebar">
        <div className="HomePage__sidebar__heading-wrapper">
          <h1>Fill in your information</h1>
        </div>
        <div className="HomePage__sidebar__progress-bar">
          {renderProgressBar()}
        </div>
      </div>
      <div className="HomePage__forms">{renderDataForm()}</div>
      <div className="HomePage__buttons-bar">
        {renderForm === FormData.Websites ? (
          <button className="HomePage__buttons-bar__submit">
            See Resume Preview
          </button>
        ) : (
          <button
            className="HomePage__buttons-bar__next"
            onClick={() => handleNextForm()}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default HomePage;
