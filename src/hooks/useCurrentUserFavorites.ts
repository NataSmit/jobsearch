import { useState, useEffect } from "react";
import { onSnapshot, query, where } from "firebase/firestore";

import { jobAdsCollectionRef } from "../utils/manageFirestore";
import { JobAd } from "../types/types";

export function useCurrentUserFavorites() {
  const [favorites, setFavorites] = useState<JobAd[]>();
  const currentUserId = localStorage.getItem("currentUserID") || "";

  useEffect(() => {
    const q = query(jobAdsCollectionRef, where("userID", "==", currentUserId));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const favorites = snapshot.docs.map((doc) => doc.data()) as JobAd[];
      console.log("favor in test hook", favorites);
      setFavorites(favorites);
    });

    return () => {
      unsubscribe();
    };
  }, [currentUserId]);

  return favorites;
}
