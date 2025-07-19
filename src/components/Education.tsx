import type { Education } from "../types/Types";

interface IProps {
  educations: Education[];
}

const Education = ({ educations }: IProps) => {
  return (
    <div className="Education">
      {educations.map(({ start, graduation, facility, city, diploma }, i) => {
        return (
          <div className="Education__entry" key={i}>
            <div className="Education__entry__dates">
              {start && <p>{start} - </p>}
              <p>{graduation}</p>
            </div>
            <p className="Education__entry__facility">{facility}</p>
            <p className="Education__entry__city">{city}</p>
            <p className="Education__entry__diploma">{diploma}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
