import type { Experience } from "../types/Types";

interface IProps {
  experiences: Experience[];
}

const Experience = ({ experiences }: IProps) => {
  return (
    <div className="Experience">
      {experiences.map(
        ({ employer, title, location, desctiption, start, end }, i) => {
          return (
            <div className="Experience__entry" key={i}>
              <div className="Experience__entry__employer-title">
                <p>
                  {employer} - {title}
                </p>
              </div>
              <p className="Experience__entry__location">{location}</p>
              <p className="Experience__entry__dates">
                {start}
                {end && ` - ${end}`}
              </p>
              <div className="Experience__entry__description">
                <p>{desctiption}</p>
              </div>
            </div>
          );
        },
      )}
    </div>
  );
};

export default Experience;
