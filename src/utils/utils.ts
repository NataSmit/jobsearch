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
    //link: obj.link,
    //locality: obj.locality,
    location: obj.location,
    title: obj.title,
  };
}

//export function convertFirebaseJobAdData(obj: FavoriteJobAdDB): FavoriteJobAd {
//  return {
//    companyName: obj.companyName,
//    publicationTime: obj.publicationTime,
//    id: obj.favoriteJobAdId,
//    location: obj.location,
//    title: obj.title,
//    firebaseDocId: obj.id,
//    userID: obj.userID,
//    locality: obj.locality,
//    link: obj.link,
//  };
//}

export function filterFavoritesByUserId(favorites: JobAd[], userId: string) {
  return favorites.filter((favObj) => favObj.userID === userId);
}
