import { JobAd } from "../../types/types";

import { FavoriteJobAdCard } from "../../components/FavoriteJobAdCard/FavoriteJobAdCard";
import { useCurrentUserFavorites } from "../../hooks/useCurrentUserFavorites";

export default function Favorites() {
  const favorites: JobAd[] = useCurrentUserFavorites() || [];

  return (
    <main className="favorites">
      <ul className="favorites__container">
        {favorites &&
          favorites.map((jobAd) => (
            <FavoriteJobAdCard jobAdId={jobAd.id} key={jobAd.id} />
          ))}
      </ul>
    </main>
  );
}
