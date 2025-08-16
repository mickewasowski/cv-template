import { useState } from "react";
import ContactsForm from "../forms/Contacts";
import EducationSummary from "../forms/EducationSummary";
import ExperienceSummary from "../forms/ExperienceSummary";
import HeaderForm from "../forms/Header";
import HobbiesForm from "../forms/Hobbies";
import LanguagesForm from "../forms/Languages";
import SkillsForm from "../forms/Skills";
import WebsitesForm from "../forms/Websites";
import "./styles/HomePage.scss";
import TemplateForm from "../forms/TemplateForm";

enum FormData {
  Template,
  Header,
  Contacts,
  Education,
  Experience,
  Skills,
  Hobbies,
  Languages,
  Websites,
}

const HomePage = () => {
  const [renderForm, setRenderForm] = useState<FormData>(FormData.Template);

  const renderDataForm = () => {
    switch (renderForm) {
      case FormData.Template: {
        return <TemplateForm />;
      }
      case FormData.Header: {
        return <HeaderForm />;
      }
      case FormData.Contacts: {
        return <ContactsForm />;
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

  const handleNextForm = (index: number | null = null) => {
    const enumValues = Object.values(FormData).filter(
      (x) => typeof x === "number",
    ) as number[];
    const maxIndex = Math.max(...enumValues);
    const nextState = index !== null ? index : (renderForm + 1 > maxIndex ? renderForm : renderForm + 1);
    setRenderForm(nextState as FormData);
  };

  const renderProgressBar = () => {
    const formEnumKeyValues = Object.entries(FormData).filter(([key]) =>
      isNaN(Number(key)),
    );

    return (
      <>
        {formEnumKeyValues.map(([name, value], index) => {
          const isActive = renderForm === value;
          return (
            <p
              key={index}
              data-text={index+1}
              className={`HomePage__sidebar__progress-bar__entry ${isActive ? "HomePage__sidebar__progress-bar__entry--active" : ""}`}
              onClick={() => handleNextForm(index)}
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
          <h1>Resume</h1>
        </div>
        <div className="HomePage__sidebar__progress-bar">
          {renderProgressBar()}
        </div>
      </div>
      <div className="HomePage__forms">{renderDataForm()}</div>
      <div className="HomePage__buttons-bar">
        {renderForm === FormData.Websites ? (
          <button className="HomePage__buttons-bar__submit">
            Preview
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
