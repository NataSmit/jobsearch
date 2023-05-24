import { ServerJobPositionDescription, ServerJobAdInfo } from "../types/types";
import { JobAd } from "../types/types";

function convertServerJobPositionDescription(
  obj: ServerJobPositionDescription
) {
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

export function convertServerJobAdData(obj: ServerJobAdInfo): JobAd {
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
