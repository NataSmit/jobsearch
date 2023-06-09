import { SearchParams, LSHistory, FavoritesFirebase } from "../types/types";

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
  console.log("addSearchParamsToLS working");
  const history = getHistoryFromLS();
  console.log("addSearchParamsToLS", history);

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

export const isInFavorites = (
  favorites: FavoritesFirebase[],
  jobAdId: string
) => {
  const favoriteJobAd = favorites.find((favoriteJobAd) => {
    return favoriteJobAd.id === jobAdId;
  });
  return Boolean(favoriteJobAd);
};
