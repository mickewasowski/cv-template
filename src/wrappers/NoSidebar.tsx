import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { TemplateConfig } from "../templates/Types";
import { renderIcon } from "../Utils";
import type { Website } from "../types/StoreTypes";

interface IProps {
  config: TemplateConfig;
  templateName: string;
}

//TODO: keep the order state here locally
// there should be a flag what is draggable and what is not
const NoSidebar = ({
  config: { type, primaryColor, image, initials, summaryInHeader },
  templateName,
}: IProps) => {
  const [css, setCss] = useState<CSSModuleClasses | null>(null);
  const { primaryColor: stateColor } = useSelector((store) => store.template);
  const {
    name,
    title,
    summary,
    image: stateImage,
    initials: stateInitials,
  } = useSelector((store) => store.header);
  const { email, phoneNumber, address } = useSelector(
    (store) => store.contacts,
  );
  const websites = useSelector((store) => store.websites.entries);

  const stylesModules = import.meta.glob("../templates/*/*.css", {
    eager: true,
  });

  useEffect(() => {
    const path = `../templates/${templateName}/${templateName}.module.css`;

    if (stylesModules[path]) {
      setCss(stylesModules[path].default);
    } else {
      console.error("Failed getting styles module");
    }
  }, [templateName]);

  if (!css) return <div>Loading css...</div>;

  const getUserInitials = () => {
    return name
      .split(" ")
      .map((n: string) => n[0])
      .filter(
        (c: string, i: number, arr: string[]) =>
          i === 0 || i === arr.length - 1,
      )
      .join("");
  };

  const renderHeader = () => {
    return (
      <div className={css.NoSidebar__header}>
        <div className={css.NoSidebar__header__nameTitle}>
          <h3 className={css.NoSidebar__header__nameTitle__name}>{name}</h3>
          <h5 className={css.NoSidebar__header__nameTitle__title}>{title}</h5>
          {summaryInHeader && (
            <p className={css.NoSidebar__header__nameTitle__summary}>
              {summary}
            </p>
          )}
        </div>

        {/* //TODO: add logic for image */}
        {/* // add logic for initials */}
        <div className={css.NoSidebar__header__imageInitials}>
          {initials && stateInitials ? (
            <div className={css.NoSidebar__header__imageInitials__initials}>
              {getUserInitials()}
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  const renderWebsites = () => {
    if (!websites.lenght) return;

    return (
      <div className={css.NoSidebar__userInfo__websites}>
        {websites.map(({ id, name: url, type }: Website) => {
          const Icon = renderIcon(type);

          return (
            <p className={css.NoSidebar__userInfo__websites__entry} key={id}>
              <Icon />
              {url}
            </p>
          );
        })}
      </div>
    );
  };

  const renderUserDetails = () => {
    return (
      <div className={css.NoSidebar__userInfo}>
        {!summaryInHeader && (
          <div className={css.NoSidebar__userInfo__summarySection}>
            <strong style={{ textTransform: "uppercase", fontSize: '15px' }}>
              Professional Summary
            </strong>
            <p className={css.NoSidebar__userInfo__summarySection__summary}>{summary}</p>
          </div>
        )}
        <div className={css.NoSidebar__userInfo__contacts}>
          <strong style={{ textTransform: "uppercase", fontSize: '15px', marginBottom: '1mm' }}>Contact</strong>
          {email && (
            <p className={css.NoSidebar__userInfo__contacts__entry}>
              <strong className={css.NoSidebar__userInfo__contacts__strong}>
                Email:
              </strong>
              {email}
            </p>
          )}
          {phoneNumber && (
            <p className={css.NoSidebar__userInfo__contacts__entry}>
              <strong className={css.NoSidebar__userInfo__contacts__strong}>
                Phone:
              </strong>
              {phoneNumber}
            </p>
          )}
          {address && (
            <p className={css.NoSidebar__userInfo__contacts__entry}>
              <strong className={css.NoSidebar__userInfo__contacts__strong}>
                Address:
              </strong>
              {address}
            </p>
          )}
          {renderWebsites()}
        </div>
      </div>
    );
  };

  return (
    <div className={css.NoSidebar}>
      {renderHeader()}
      {renderUserDetails()}

      <div className="NoSidebar__work"></div>
      <div className="NoSidebar__education"></div>
      <div className="NoSidebar__skills"></div>
      <div className="NoSidebar__languages"></div>
      <div className="NoSidebar__hobbies"></div>
    </div>
  );
};

export default NoSidebar;
