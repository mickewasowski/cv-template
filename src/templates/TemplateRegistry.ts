// TODO: this file should describe all the supported templates, their names, a preview image, and the component which renders the template
// import ModernTemplate from "@/templates/modern/template";
// import MinimalistTemplate from "@/templates/minimalist/template";

export const templates = {
  modern: {
    template2: {
      name: "Modern",
      preview: "/templates/modern/preview.png",
      // component: ModernTemplate,
    }
  },
  minimalist: {
    template1: {
      name: "Minimalist",
      preview: "/templates/minimalist/preview.png",
      // component: MinimalistTemplate,
    }
  },
};


// example how to render them (this is only a suggestion, the actual way to render depends on the page - modern, classic, all, etc.)
// Object.entries(templates).map(([key, t]) => (
//   <div key={key} onClick={() => setTemplateName(key)}>
//     <img src={t.preview} alt={t.name} />
//     <p>{t.name}</p>
//   </div>
// ));

