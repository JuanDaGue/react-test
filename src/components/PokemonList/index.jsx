import React, { useState, useContext, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_POKEMONS } from '../../graphql/queries';
import './pokemonlist.css';
import PokemonCard from '../PokemonCard';
import { GlobalContext } from '../../context/GlobalState';
import Header from '../Header';
import { useFavorites } from '../../hooks/useFavorites';
import { Link } from 'react-router-dom'; // Import Link for navigation

const PokemonList = () => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const handleToggleFavorite = (pokemon) => {
    if (favorites.find(fav => fav.id === pokemon.id)) {
      removeFavorite(pokemon.id);
    } else {
      addFavorite(pokemon);
    }
  };

  const { loading, error, data } = useQuery(GET_ALL_POKEMONS);
  const { filter, pokemons, sortType } = useContext(GlobalContext);
  const [sortedPokemons, setSortedPokemons] = useState([]);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading Pokémon data</p>;

  const filteredPokemons = sortedPokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className='homecard'>
      <Header />
      <div className="pokemon-grid">
        {filteredPokemons.map(pokemon => (
          <PokemonCard 
            key={pokemon.id} 
            pokemon={pokemon} 
            isFavorite={favorites.find(fav => fav.id === pokemon.id)} 
            onToggleFavorite={() => handleToggleFavorite(pokemon)} 
          />
        ))}
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
