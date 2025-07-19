import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

interface IProps {
  email?: string;
  phoneNumber?: string;
  address?: string;
}

const Contacts = ({ email, phoneNumber, address }: IProps) => {
  return (
    <div className="Contacts">
      {email && (
        <div className="Contacts__email-wrapper">
          <MdOutlineEmail />
          <p>{email}</p>
        </div>
      )}
      {phoneNumber && (
        <div className="Contacts__phone-wrapper">
          <MdOutlinePhone />
          <p>{phoneNumber}</p>
        </div>
      )}
      {address && (
        <div className="Contacts__address-wrapper">
          <MdOutlineLocationOn />
          <p>{address}</p>
        </div>
      )}
    </div>
  );
};

export default Contacts;
