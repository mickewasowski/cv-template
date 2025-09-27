import { supported } from "../templates/supported";
import { useDispatch } from "react-redux";
import { updateEntry } from "../store/slices/templateSlice.ts";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import "./styles/TemplateForm.scss";

const TemplateForm = () => {
  const enabledTemplates = supported.filter((x) => x.enabled);

  const [color, setColor] = useState("#086dfb");
  const dispatch = useDispatch();

  const getImage = (imageName: string) => {
    return `/images/cv-thumbnails/${imageName}`;
  };

  const handleTemplateClick = (templateName: string) => {
    dispatch(updateEntry({ name: templateName }));
  };

  const renderTemplates = () => {
    return enabledTemplates.map(({ templateName, image }, index) => {
      return (
        <div className="TemplateForm__grid__template" key={`${templateName}-${index}`}>
          <button onClick={() => handleTemplateClick(templateName)}>
            <img src={getImage(image)} alt={`${image}`} />
          </button>
        </div>
      );
    });
  };

  return (
    <div className="TemplateForm">
      <div className="TemplateForm__heading">
        <h1>Choose a template</h1>
      </div>
      <div className="TemplateForm__grid">{renderTemplates()}</div>
      <div className="TemplateForm__color-picker">
        <h3>Pick accent color:</h3>
        <HexColorPicker color={color} onChange={setColor} />
      </div>
    </div>
  );
};

export default TemplateForm;
