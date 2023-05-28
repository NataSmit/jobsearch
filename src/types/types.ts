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

export type FavoriteJobAdDB = {
  userID: string;
  favoriteJobAdId: string;
  companyName: string;
  location: string;
  publicationTime: string;
  title: string;
  id: string; // firebase id
  link: string;
  locality: string;
};

export type FavoriteJobAd = {
  companyName: string;
  publicationTime: string;
  id: string;
  location: string;
  title: string;
  firebaseDocId: string;
  userID: string;
  link: string;
  locality: string;
};

export type JobAdClient = {
  companyName: string;
  publicationTime: string;
  id: string;
  location: string;
  title: string;
  firebaseDocId?: string;
  userID?: string;
};

export type FavoritesDB = {
  favoriteJobAdId: string;
  userID: string;
};
