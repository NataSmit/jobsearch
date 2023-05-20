export type ServerJobPositionData = {
  company_name: string;
  formatted_relative_time: string;
  id: string;
  link: string;
  locality: string;
  location: string;
  title: string;
};

export type ServerJobDetails = {
  company: object;
  creation_date: string;
  description: string;
  job_title: string;
  job_type: null | string;
  location: string;
  salary: null | string;
};
