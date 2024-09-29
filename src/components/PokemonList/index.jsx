import React, { useState, useContext, useEffect } from 'react';
import './pokemonlist.css';
import PokemonCard from '../PokemonCard';
import { GlobalContext } from '../../context/GlobalState';
import Header from '../Header';
import { useFavorites } from '../../hooks/useFavorites';
import { Link } from 'react-router-dom'; // Import Link for navigation

const PokemonList = () => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const { filter, pokemons, sortType } = useContext(GlobalContext);
  const [sortedPokemons, setSortedPokemons] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleToggleFavorite = (pokemon) => {
    if (favorites.find(fav => fav.id === pokemon.id)) {
      removeFavorite(pokemon.id);
    } else {
      addFavorite(pokemon);
    }
  };

  useEffect(() => {
    const sorted = [...pokemons].sort((a, b) => {
      if (sortType === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortType === 'id') {
        return a.id.toString().localeCompare(b.id.toString());
      }
      return 0;
    });
    setSortedPokemons(sorted);
  }, [pokemons, sortType]);

  useEffect(() => {
    if (sortType === 'id' && filter && filter.search(/[0-9]/img) === -1) {
      setErrorMessage('Please insert a valid ID number');
    } else {
      setErrorMessage('');
    }
  }, [filter, sortType]);

  const filteredPokemons = sortedPokemons.filter(pokemon => {
    if (sortType === 'name') {
      return pokemon.name.toLowerCase().includes(filter.toLowerCase());
    } else if (sortType === 'id') {
      return `${pokemon.id}`.includes(filter);
    }
    return false;
  });

  return (
    <div className='homecard'>
      <Header />
      <div className='Contentgrid'>
        <div className="pokemon-grid">
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            filteredPokemons.map(pokemon => (
              <PokemonCard 
                key={pokemon.id} 
                pokemon={pokemon} 
                isFavorite={favorites.find(fav => fav.id === pokemon.id)} 
                onToggleFavorite={() => handleToggleFavorite(pokemon)} 
              />
            ))
          )}
        </div>
      </div>
      
      {/* Favorites button container */}
      <div className="favorites-button-container">
        <Link to="/favorites">
          <img src="/pokeball-pokemon.png" alt="pokeball-pokemon" className='favoritesP'/>
        </Link>
      </div>
    </div>
  );
};

export default PokemonList;
