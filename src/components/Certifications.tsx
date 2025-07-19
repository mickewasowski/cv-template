import { CertificateType, type Certificate } from "./types/Types";

interface IProps {
  certificates: Certificate[];
}

const Certificates = ({ certificates }: IProps) => {
  return (
    <div className="Certificates">
      {certificates.map(({type, issuer, dateOfIssue, name, url}, i) => (
        <div className="Certificates__entry" key={i}>
          <div className="Certificates__entry__issue">
            <h4>{CertificateType[type]}</h4>
            <p>{issuer} - {name}</p>
            <p>{dateOfIssue}</p>
          </div>
          {url && (<a href={url} target="_blank">Certificate link</a>)}
        </div>
      ))}
    </div>
  );
};

export default Certificates;
