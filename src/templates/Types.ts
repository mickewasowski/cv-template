export enum TemplateType {
  Single,
  Dual,
}

export type TemplateConfig = {
  type: TemplateType;
  primaryColor: string;
  image: boolean;
  initials: boolean;
}
