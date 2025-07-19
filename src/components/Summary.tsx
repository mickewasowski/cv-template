interface IProps {
  summary: string;
}

const Summary = ({ summary }: IProps) => {
  return (
    <div className="Summary">
      <p>{summary}</p>
    </div>
  );
};

export default Summary;
