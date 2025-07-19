import type { ReactNode } from "react";
import { LanguageLevel, type Language } from "../types/Types";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

interface IProps {
  languages: Language[];
  showLevelAsStars?: boolean;
}

const LEVEL_STARS_MAP = {
  [LanguageLevel.NativeOrBilingual]: 5,
  [LanguageLevel.FullProfessional]: 4.5,
  [LanguageLevel.ProfessionalWorking]: 4,
  [LanguageLevel.LimitedWorking]: 2.5,
  [LanguageLevel.Elementary]: 2,
};

const Languages = ({ languages, showLevelAsStars = false }: IProps) => {
  const renderLevel = (level: LanguageLevel): ReactNode => {
    if (showLevelAsStars) {
      const stars = LEVEL_STARS_MAP[level];
      const MAX_STARS = 5;
      const fullStars = Math.floor(stars);
      const halfStars = stars - fullStars >= 0.5;
      const emptyStars = MAX_STARS - fullStars - (halfStars ? 1 : 0);
      
      return (
        <div className="Languages__entry__stars">
          {Array.from({ length: fullStars }).map((_, i) => (
            <FaStar key={`full-${i}`} />
          ))}
          {halfStars && <FaRegStarHalfStroke key={'half'}/>}
          {Array.from({ length: emptyStars }).map((_, i) => (
            <FaRegStar key={`empty-${i}`} />
          ))}
        </div>
      );
    } else {
      return <p className="Languages__entry__level">{LanguageLevel[level]}</p>;
    }
  };

  return (
    <div className="Languages">
      {languages.map(({ language, level }, i) => {
        return (
          <p className="Languages__entry" key={i}>
            {language}
            {level && renderLevel(level)}
          </p>
        );
      })}
    </div>
  );
};

export default Languages;
