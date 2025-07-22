import ContactsForm from "../forms/Contacts";
import EducationSummary from "../forms/EducationSummary";
import ExperienceSummary from "../forms/ExperienceSummary";
import HeaderForm from "../forms/Header";
import HobbiesForm from "../forms/Hobbies";
import SkillsForm from "../forms/Skills";
import SummaryForm from "../forms/Summary";

interface IProps {}

const HomePage = ({}: IProps) => {
  //TODO: have these
  //choose a template
  //forms for input + upload of image (optional depending on the template they choose)
  //next button => leads a page with already populated data

  return (
    <div className="HomePage">
      <ContactsForm />
      <HeaderForm />
      <EducationSummary />
      <ExperienceSummary />
      <SummaryForm />
      <SkillsForm />
      <HobbiesForm />
    </div>
  );
};

export default HomePage;
