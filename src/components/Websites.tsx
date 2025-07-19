interface IProps {
  websites: string[];
}

const Websites = ({ websites }: IProps) => {
  return (
    <div className="Websites">
      <ul>
        {websites.map((w, i) => {
          return <li key={i}>{w}</li>;
        })}
      </ul>
    </div>
  );
};

export default Websites;
