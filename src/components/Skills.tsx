interface IProps {
  skills: string[];
}

const Skills = ({ skills }: IProps) => {
  return (
    <div className="Skills">
      <ul>
        {skills.map((s, i) => {
          return <li key={i}>{s}</li>;
        })}
      </ul>
    </div>
  );
};

export default Skills;
