import { useState, useEffect } from "react";
import { onSnapshot, query } from "firebase/firestore";

import { jobAdsCollectionRef } from "../utils/manageFirestore";
import { filterFavoritesByUserId } from "../utils/utils";
import { JobAd } from "../types/types";

export function useCurrentUserFavorites() {
  const [favorites, setFavorites] = useState<JobAd[]>();
  const currentUserId = localStorage.getItem("currentUserID") || "";

  useEffect(() => {
    const q = query(jobAdsCollectionRef);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const favorites = snapshot.docs.map((doc) => doc.data()) as JobAd[];
      const currentUserFavorites = filterFavoritesByUserId(
        favorites,
        currentUserId
      );
      setFavorites(currentUserFavorites);
    });

    return () => {
      unsubscribe();
    };
  }, [currentUserId]);

  return favorites;
}
