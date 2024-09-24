import React, { useState, useContext,  useEffect  } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_POKEMONS } from '../../graphql/queries';
import './pokemonlist.css'
import PokemonCard from '../PokemonCard';
import FilterBar from '../FilterBar';
import { GlobalContext } from '../../context/GlobalState';
import SortButtons from '../SortButtons'
import Header from '../Header';



const PokemonList = ({ addFavorite }) => {


  const { loading, error, data } = useQuery(GET_ALL_POKEMONS);
  const { filter, pokemons } = useContext(GlobalContext);
  //console.log('data', data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading Pokémon data</p>;

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(filter.toLowerCase())
  );


  return (
    
<div>
{/* <div className='header'>
                <div className='pokedex'>
                  <img src="../../public/pokeball.png" alt="Pokeball"         className="pokeball-icon" />
                  <h1>Pokémon App</h1>
                </div>
                <div className='pokefilters'>

                <FilterBar/>
                <SortButtons />
                </div>
              </div> */}
      <Header/>        
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




