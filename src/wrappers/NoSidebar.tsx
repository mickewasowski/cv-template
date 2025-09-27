import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { TemplateConfig } from "../templates/Types";

interface IProps {
  config: TemplateConfig;
  templateName: string;
}

//TODO: keep the order state here locally
// there should be a flag what is draggable and what is not
const NoSidebar = ({
  config: { type, primaryColor, image, initials },
  templateName,
}: IProps) => {
  const { primaryColor: stateColor } = useSelector((store) => store.template);
  const {
    name,
    title,
    summary,
    image: stateImage,
    initials: stateInitials,
  } = useSelector((store) => store.header);
  const [css, setCss] = useState<CSSModuleClasses | null>(null);

  const stylesModules = import.meta.glob("../templates/*/*.css");

  useEffect(() => {
    const path = `../templates/${templateName}/${templateName}.module.css`;

    if (stylesModules[path]) {
      stylesModules[path]().then((mod) => setCss(mod.default));
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

  const renderUserDetails = () => {

  };

  return (
    <div className={css.NoSidebar}>
      {renderHeader()}
      <div className="NoSidebar__user-info">
        {renderUserDetails()}
      </div>
      <div className="NoSidebar__work"></div>
      <div className="NoSidebar__education"></div>
      <div className="NoSidebar__skills"></div>
      <div className="NoSidebar__languages"></div>
      <div className="NoSidebar__hobbies"></div>
    </div>
  );
};

export default NoSidebar;
