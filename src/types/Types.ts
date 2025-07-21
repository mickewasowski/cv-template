export type Education = {
  start?: string;
  graduation: string;
  facility: string;
  city: string;
  diploma: Diploma;
}

export enum Diploma {
  HighSchool = 'High School',
  Bachelors = 'Bachelors',
  Masters = 'Masters',
  Doctorate = 'Doctorate',
  PostGraduate = 'Post Graduate',
  Certificate = 'Certificate',
  Other = 'Other',
}

export type Experience = {
  employer: string;
  title: string;
  location: ExperienceLocation;
  start: string;
  end?: string;
  desctiption: string;
}

export enum ExperienceLocation {
  Hybrid = 'Hybrid',
  OnSite = 'On Site',
  Remote = 'Remote',
}

export enum LanguageLevel {
  NativeOrBilingual,
  FullProfessional,
  ProfessionalWorking,
  LimitedWorking,
  Elementary,
}

export type Language = {
  language: string;
  level?: LanguageLevel;
}

export enum CertificateType {
  License,
  Certificate,
  Training,
}

export type Certificate = {
  type: CertificateType;
  issuer: string;
  dateOfIssue: string;
  name: string;
  url?: string;
}
