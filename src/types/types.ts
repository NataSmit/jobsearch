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
  location: string;
  publicationTime: string;
  title: string;
  userID?: string;
};

export type JodAdDetails = {
  companyName: string;
  logo: string;
  link: string;
  creationDate: string;
  description: string;
  jobTitle: string;
  location: string;
  jobType: string;
};

export type JobAdDTO = {
  count: number;
  hits: ServerJobAdInfo[];
  indeed_final_url: string;
  next_page_id: number;
  suggest_locality: null;
};

export type JobAdInfoDTO = {
  company: {
    indeed_absolute_link: string;
    logo_url: string;
    name: string;
  };
  creation_date: string;
  description: string;
  indeed_final_url: string;
  job_title: string;
  job_type: string;
  location: string;
  salary: any;
};
