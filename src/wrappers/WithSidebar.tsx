import type { TemplateConfig } from "../templates/Types";

interface IProps {
  config: TemplateConfig;
  templateName: string;
}

const WithSidebar = ({
  config: { type, primaryColor, image, initials },
  templateName,
}: IProps) => {
  return <div className="WithSidebar"></div>;
};

export default WithSidebar;
