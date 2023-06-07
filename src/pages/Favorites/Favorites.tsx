import { FavoritesFirebase } from "../../types/types";

import { FavoriteJobAdCard } from "../../components/FavoriteJobAdCard/FavoriteJobAdCard";
import { useCurrentUserFavorites } from "../../hooks/useCurrentUserFavorites";

export default function Favorites() {
  const favorites: FavoritesFirebase[] = useCurrentUserFavorites() || [];

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
