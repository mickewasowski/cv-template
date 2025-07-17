import { FaPhoneAlt } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillGearFill } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
import { IoLanguageOutline } from "react-icons/io5";
import { MdOutlineInterests } from "react-icons/md";

import {
  SectionEnum,
  type About,
  type Contacts,
  type Skills,
  type Passions,
  type Languages,
} from "../../Types";
import "./Section.scss";

type SectionProps =
  | { type: SectionEnum.About; data: About }
  | { type: SectionEnum.Contact; data: Contacts }
  | { type: SectionEnum.Skills; data: Skills }
  | { type: SectionEnum.Language; data: Languages }
  | { type: SectionEnum.Passions; data: Passions };

const Section = ({ type, data }: SectionProps) => {
  const renderSection = () => {
    switch (type) {
      case SectionEnum.About: {
        return (
          <div className="Section__About">
            <div className="Section__About__Heading">
              <FaRegAddressCard />
              <h2>About</h2>
            </div>
            <div className="Section__About__Description">
              <p>{data.description}</p>
            </div>
          </div>
        );
      }
      case SectionEnum.Contact: {
        return (
          <div className="Section__Contact">
            <div className="Section__Contact__Heading">
              <FaRegAddressCard />
              <h2>Contacts</h2>
            </div>
            <div className="Section__Contact__Phone">
              <FaPhoneAlt />
              <p className="Section__Contact__Phone__Number">
                {data.phoneNumber}
              </p>
            </div>
            <div className="Section__Contact__Email">
              <MdEmail />
              <p className="Section__Contact__Email__Mail">{data.email}</p>
            </div>
            <div className="Section__Contact__Location">
              <FaLocationDot />
              <p className="Section__Contact__Location__City">
                {data.location}
              </p>
            </div>
            <div className="Section__Contact__Website">
              <MdLanguage />
              <p className="Section__Contact__Website__Url">{data.website}</p>
            </div>
          </div>
        );
      }
      case SectionEnum.Skills: {
        return (
          <div className="Section__Skills">
            <div className="Section__Skills__Heading">
              <BsFillGearFill />
              <h2>Skills</h2>
            </div>
            <div className="Section__Skills__List">
              <ul>
                {data.list.map((x, i) => {
                  return <li key={`${x}-${i}`}>{x}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      }
      case SectionEnum.Language: {
        return (
          <div className="Section__Languages">
            <div className="Section__Languages__Heading">
              <IoLanguageOutline />
              <h2>Languages</h2>
            </div>
            <div className="Section__Languages__List">
              <ul>
                {data.list.map((x, i) => {
                  return <li key={`${x}-${i}`}>{x}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      }
      case SectionEnum.Passions: {
        return (
          <div className="Section__Passions">
            <div className="Section__Passions__Heading">
              <MdOutlineInterests />
              <h2>Interests</h2>
            </div>
            <div className="Section__Passions__List">
              <ul>
                {data.list.map((x, i) => {
                  return <li key={`${x}-${i}`}>{x}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      }
    }
  };

  return <div className="Section">{renderSection()}</div>;
};

export default Section;
