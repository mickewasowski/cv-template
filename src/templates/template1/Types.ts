export enum SectionEnum {
  About,
  Contact,
  Skills,
  Language,
  Passions,
};

export type SectionType = SectionEnum.About | SectionEnum.Contact | SectionEnum.Skills | SectionEnum.Language | SectionEnum.Passions;

export type About = {
  description: string;
  name: string;
  position: string;
}

export type Contacts = {
  phoneNumber: number;
  email: string;
  location: string;
  website: string;
}

type StringList = {
  list: string[];
}

export type Skills = StringList;
export type Languages = StringList;
export type Passions = StringList;

export type DatedEntry = {
  from: string;
  to: string;
  place: string;
  occupation: string;
  description: string;
}
