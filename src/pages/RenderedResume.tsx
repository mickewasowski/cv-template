import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TemplateType, type TemplateConfig } from "../templates/Types";
import NoSidebar from "../wrappers/NoSidebar";
import WithSidebar from "../wrappers/WithSidebar";
import "./styles/RenderedResume.scss";

const RenderedResume = ({ }) => {
  const { name: templateName } = useSelector((store) => store.template);
  const [config, setConfig] = useState<TemplateConfig | null>(null);
  const templateModules = import.meta.glob("../templates/*/*.ts");

  useEffect(() => {
    const path = `../templates/${templateName}/config.ts`;

    if (templateModules[path]) {
      templateModules[path]().then((mod) => setConfig(mod.default));
    } else {
      console.error("Template not found:", path);
    }
  }, [templateName]);

  if (!config) return <div>Loading config...</div>;

  if (config?.type === TemplateType.Single) {
    return (
      <div className="RenderedResume">
        <NoSidebar config={config} templateName={templateName} />
      </div>
    );
  }

  if (config?.type === TemplateType.Dual) {
    return (
      <div className="RenderedResume">
        <WithSidebar config={config} templateName={templateName} />
      </div>
    );
  }
};

export default RenderedResume;
