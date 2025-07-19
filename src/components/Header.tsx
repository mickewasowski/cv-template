interface IProps {
  image?: string;
  initials?: boolean;
  name: string;
  title: string;
}

const Header = ({ image, initials, name, title }: IProps) => {
  const nameInitials = initials && name.split(" ").map((x) => x[0]).join('');

  return (
    <div className="Header">
      {image && (
        <div className="Header__image">
          <img src={image} alt={"Avatar"} />
        </div>
      )}
      {initials && (
        <div className="Header__initials">
          <p>{nameInitials}</p>
        </div>
      )}
      <h2>{name}</h2>
      <h4>{title}</h4>
    </div>
  );
};

export default Header;
