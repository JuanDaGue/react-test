import React, { useState, useContext  } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_POKEMONS } from '../../graphql/queries';
import './pokemonlist.css'
import PokemonCard from '../PokemonCard';
import FilterBar from '../FilterBar';
import { GlobalContext } from '../../context/GlobalState';


const PokemonList = ({ addFavorite }) => {
  const { loading, error, data } = useQuery(GET_ALL_POKEMONS);
  const { filter } = useContext(GlobalContext);
  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading Pokémon data</p>;

  const filteredPokemons = data.pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (e) => setFilter(e.target.value);

  return (
<div>
      <FilterBar/>
      <div className="pokemon-grid">
        {filteredPokemons
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
    </div>
  );
};

export default PokemonList;




