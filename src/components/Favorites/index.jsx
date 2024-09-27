import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { useFavorites } from '../../hooks/useFavorites';
import PokemonCard from '../PokemonCard';
import './favorites.css';

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="favorites-page">
      <div className='header'>

        <h1>Your Pokémon</h1>
      </div>
      <div className="pokemon-grid">
        {favorites.length > 0 ? (
          favorites.map(pokemon => (
            <PokemonCard 
              key={pokemon.id} 
              pokemon={pokemon} 
              isFavorite={true} 
              onToggleFavorite={() => removeFavorite(pokemon.id)} 
            />
          ))
        ) : (
          <p>No favorite Pokémon yet!</p>
        )}
      </div>

      {/* Button to return to the home page */}
      <div className="favorites-button-container">
        <Link to="/">
          <img src="/pokeball-pokemon.png" alt="pokeball-pokemon" className="favoritesP"/>
        </Link>
      </div>
    </div>
  );
};

export default Favorites;
