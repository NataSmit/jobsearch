import { useState, useContext, useEffect } from "react";
import { onSnapshot, query } from "firebase/firestore";

import { jobAds } from "../../utils/data";
import { JobAdCard } from "../JobAdCard/JobAdCard";
import {
  convertServerJobAdData,
  filterFavoritesByUserId,
} from "../../utils/utils";
import { JobAd, FavoritesDB } from "../../types/types";
import { jobAdsCollectionRef } from "../../utils/manageFirestore";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export function Favorites() {
  const currentUser = useContext(CurrentUserContext);
  const [favorites, setFavorites] = useState<JobAd[]>();
  const formattedJobAds: JobAd[] = jobAds.map((jobAd) => {
    return convertServerJobAdData(jobAd);
  });

  useEffect(() => {
    const q = query(jobAdsCollectionRef);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const favorites = snapshot.docs.map((doc) => doc.data()) as FavoritesDB[];
      const currentUserFavorites = filterFavoritesByUserId(
        favorites,
        currentUser.uid
      );
      const filteredFavorites = formattedJobAds.filter((jobAd) => {
        return currentUserFavorites.includes(jobAd.id);
      });
      setFavorites(filteredFavorites);
    });

    return () => {
      unsubscribe();
    };
  }, [currentUser]);

  return (
    <main className="favorites">
      <ul className="favorites__container">
        {favorites &&
          favorites.map((jobAd) => (
            <JobAdCard jobAd={jobAd} key={jobAd.id} favorites />
          ))}
      </ul>
    </main>
  );
}
