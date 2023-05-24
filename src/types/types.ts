export type ServerJobAdInfo = {
  company_name: string;
  formatted_relative_time: string;
  id: string;
  link: string;
  locality: string;
  location: string;
  title: string;
  pub_date_ts_milli: number;
};

export type ServerJobPositionDescription = {
  company: object;
  creation_date: string;
  description: string;
  job_title: string;
  job_type: null | string;
  location: string;
  salary: null | string;
};

export type JobAd = {
  companyName: string;
  id: string;
  link: string;
  locality: string;
  location: string;
  publicationTime: string;
  title: string;
};
