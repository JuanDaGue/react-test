import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (pokemon) => {
    const newFavorites = [...favorites, pokemon];
    setFavorites(newFavorites);
  };

  const removeFavorite = (id) => {
    const newFavorites = favorites.filter(pokemon => pokemon.id !== id);
    setFavorites(newFavorites);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
  };
};
