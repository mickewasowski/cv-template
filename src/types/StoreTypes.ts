import type { CertificateType, Diploma, ExperienceLocation } from "./Types";

export type Header = {
  name: string;
  title: string;
  image?: string;
  initials?: boolean; //if the user wants initials or not
};

export type Education = {
  id: number;
  start?: string;
  graduation: string;
  facility: string;
  city: string;
  diploma: Diploma;
};

export type Experience = {
  id: number;
  start: string;
  end: string;
  employer: string;
  title: string;
  location: ExperienceLocation;
  description: string;
};

export type Summary = string;

export type Skill = {
  id: number;
  name: string;
}
export type Skills = Skill[];

export type Contacts = {
  email: string;
  phoneNumber: string;
  address: string;
};

export type Certificates = {
  id: string;
  type: CertificateType;
  issuer: string;
  dateOfIssue: string;
  name: string;
  url?: string;
};

export type Hobby = {
  id: number;
  name: string;
}

export type Hobbies = Hobby[];

export type Languages = string[];

export type Websites = string[];

export type Template = {
  name: string;
  primaryColor: string;
};

export type UIPageLayout = {
  main: string[];
  side: string[];
};

export type UI = {
  pageLayout: UIPageLayout;
  primaryColor: string;
};
