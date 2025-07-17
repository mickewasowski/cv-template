


interface IProps<T> {
  title: string;
  data: T;
}

const MainSection = <T,>({}: IProps<T>) => {

  const renderSection = () => {


  };

  return (
  <div className="MainSection">{renderSection()}</div>
  )
};

export default MainSection;
