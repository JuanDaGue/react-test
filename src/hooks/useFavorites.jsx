import { useState } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (pokemon) => {
    if (!favorites.find(fav => fav.id === pokemon.id)) {
      setFavorites([...favorites, pokemon]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  return { favorites, addFavorite, removeFavorite };
};
