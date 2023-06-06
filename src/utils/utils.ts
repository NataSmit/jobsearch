import { ServerJobAdInfo } from "../types/types";
import { JobAd, SearchParams, LSHistory } from "../types/types";

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

export function filterFavoritesByUserId(favorites: JobAd[], userId: string) {
  return favorites.filter((favObj) => favObj.userID === userId);
}

function getHistoryFromLS() {
  let history: LSHistory = {};
  if (localStorage["history"]) {
    history = JSON.parse(localStorage.getItem("history") || "") || {};
  }
  return history;
}

export function getSearchHistoryFromLS(currentUserId: string) {
  const history = getHistoryFromLS();

  if (currentUserId in history) {
    return history[currentUserId];
  } else {
    return [];
  }
}

export function addSearchParamsToLS(currentUserId: string, data: SearchParams) {
  const history = getHistoryFromLS();

  if (currentUserId in history) {
    history[currentUserId].push(data);
  } else {
    history[currentUserId] = [data];
  }
  localStorage.setItem("history", JSON.stringify(history));
}

export function saveCurrentUserIDToLS(currentUserID: string) {
  localStorage.setItem("currentUserID", currentUserID);
}

export function deleteUserHistoryFromLS(currentUserID: string) {
  const history = JSON.parse(localStorage.getItem("history") || "");
  delete history[currentUserID];
  localStorage.setItem("history", JSON.stringify(history));
}

export function getLastSearchParamsFromLS(): SearchParams {
  let searchParams = {} as SearchParams;
  if (localStorage.lastSearchParams) {
    searchParams =
      JSON.parse(localStorage.getItem("lastSearchParams") || "") || {};
  }
  return searchParams;
}

export function saveLastSearchParamsToLS(jobTitle: string, location: string) {
  localStorage.setItem(
    "lastSearchParams",
    JSON.stringify({ jobTitle, location })
  );
}

export const isAddedToFavorites = (favorites: JobAd[], jobAdId: string) => {
  const isInFavorites = favorites.find((favoriteJobAd) => {
    return favoriteJobAd.id === jobAdId;
  });
  return Boolean(isInFavorites);
};
