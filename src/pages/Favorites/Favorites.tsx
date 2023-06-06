import { JobAd } from "../../types/types";

import { Header } from "../../components/Header/Header";
import { FavoriteJobAdCard } from "../../components/FavoriteJobAdCard/FavoriteJobAdCard";
import { useCurrentUserFavorites } from "../../hooks/useCurrentUserFavorites";

export function Favorites() {
  const favorites: JobAd[] = useCurrentUserFavorites() || [];

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
