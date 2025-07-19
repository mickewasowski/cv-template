import type { CertificateType, Diploma, ExperienceLocation } from "./Types";

export type Header = {
  name: string;
  title: string;
  image?: string;
  initials?: boolean; //if the user wants initials or not
};

export type Education = {
  start?: string;
  graduation: string;
  facility: string;
  city: string;
  diploma: Diploma;
};

export type Experience = {
  start: string;
  end: string;
  employer: string;
  title: string;
  location: ExperienceLocation;
  description: string;
};

export type Summary = string;

export type Skills = string[];

export type Contacts = {
  email: string;
  phoneNumber: string;
  address: string;
};

export type Certificates = {
  type: CertificateType;
  issuer: string;
  dateOfIssue: string;
  name: string;
  url?: string;
};

export type Hobbies = string[];

export type Languages = string[];

export type Websites = string[];

export type Template = string;
