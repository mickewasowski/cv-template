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

interface IProps {}

const HomePage = ({}: IProps) => {
  //TODO: have these
  //choose a template
  //forms for input + upload of image (optional depending on the template they choose)
  //next button => leads a page with already populated data

  return (
    <div className="HomePage">
      <div>
        <h1>Fill in your information</h1>
      </div>
      <div className="HomePage__forms">
        <CollapsibleFormWrapper open={true}>
          <HeaderForm />
        </CollapsibleFormWrapper>
        <CollapsibleFormWrapper open={true}>
          <ContactsForm />
        </CollapsibleFormWrapper>
        <CollapsibleFormWrapper open={true}>
          <SummaryForm />
        </CollapsibleFormWrapper>
        <CollapsibleFormWrapper open={false}>
          <EducationSummary />
        </CollapsibleFormWrapper>
        <CollapsibleFormWrapper open={false}>
          <ExperienceSummary />
        </CollapsibleFormWrapper>
        <CollapsibleFormWrapper open={false}>
          <SkillsForm />
        </CollapsibleFormWrapper>
        <CollapsibleFormWrapper open={false}>
          <HobbiesForm />
        </CollapsibleFormWrapper>
        <CollapsibleFormWrapper open={false}>
          <LanguagesForm />
        </CollapsibleFormWrapper>
        <CollapsibleFormWrapper open={false}>
          <WebsitesForm />
        </CollapsibleFormWrapper>
      </div>
      <button>See Resume Preview</button>
    </div>
  );
};

export default HomePage;
