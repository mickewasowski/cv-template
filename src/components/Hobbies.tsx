interface IProps {
  hobbies: string[];
}

const Hobbies = ({ hobbies }: IProps) => {
  return (
    <div className="Hobbies">
      {hobbies.map((h, i) => {
        return (
          <p className="Hobbies__entry" key={i}>
            {h}
          </p>
        );
      })}
    </div>
  );
};

export default Hobbies;
