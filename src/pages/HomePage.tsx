import ContactsForm from "../forms/Contacts";
import EducationSummary from "../forms/EducationSummary";
import HeaderForm from "../forms/Header";

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
    </div>
  );
};

export default HomePage;
