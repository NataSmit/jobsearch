import { useState, useEffect } from "react";
import { onSnapshot, query, where } from "firebase/firestore";

import { jobAdsCollectionRef } from "../utils/manageFirestore";
import { FavoritesFirebase } from "../types/types";

export function useCurrentUserFavorites() {
  const [favorites, setFavorites] = useState<FavoritesFirebase[]>();
  const currentUserId = localStorage.getItem("currentUserID") || "";

  useEffect(() => {
    const q = query(jobAdsCollectionRef, where("userID", "==", currentUserId));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const favorites = snapshot.docs.map((doc) =>
        doc.data()
      ) as FavoritesFirebase[];
      setFavorites(favorites);
    });

    return () => {
      unsubscribe();
    };
  }, [currentUserId]);

  return favorites;
}
