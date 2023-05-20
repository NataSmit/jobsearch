import { ServerJobDetails, ServerJobPositionData } from "../types/types";

function convertServerJobDetails(obj: ServerJobDetails) {
  return {
    company: obj.company,
    creationDate: obj.creation_date,
    description: obj.description,
    jobTitle: obj.job_title,
    jobType: obj.job_type,
    location: obj.location,
    salary: obj.salary,
  };
}

function convertServerJobPositionData(obj: ServerJobPositionData) {
  return {
    companyName: obj.company_name,
    publicationTime: obj.formatted_relative_time,
    id: obj.id,
    link: obj.link,
    locality: obj.locality,
    location: obj.location,
    title: obj.title,
  };
}
