import { useState, useContext, useEffect } from "react";
import { onSnapshot, query } from "firebase/firestore";

import { filterFavoritesByUserId } from "../../utils/utils";
import { JobAd } from "../../types/types";
import { jobAdsCollectionRef } from "../../utils/manageFirestore";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Header } from "../../components/Header/Header";
import { FavoriteJobAdCard } from "../../components/FavoriteJobAdCard/FavoriteJobAdCard";

export function Favorites() {
  const currentUser = useContext(CurrentUserContext);
  const [favorites, setFavorites] = useState<JobAd[]>();

  useEffect(() => {
    const q = query(jobAdsCollectionRef);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const favorites = snapshot.docs.map((doc) => doc.data()) as JobAd[];
      const currentUserFavorites = filterFavoritesByUserId(
        favorites,
        currentUser.uid
      );
      setFavorites(currentUserFavorites);
    });

    return () => {
      unsubscribe();
    };
  }, [currentUser]);

  return (
    <>
      <Header />
      <main className="favorites">
        <ul className="favorites__container">
          {favorites &&
            favorites.map((jobAd) => (
              <FavoriteJobAdCard jobAdId={jobAd.id} key={jobAd.id} />
            ))}
        </ul>
      </main>
    </>
  );
}
