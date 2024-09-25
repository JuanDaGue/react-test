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
  const { filter, pokemons, sortType } = useContext(GlobalContext);
  const [sortedPokemons, setSortedPokemons] = useState([]);
  console.log('data', pokemons)

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
  console.log('sort ->',sortType)



  return (
    
<div className='homecard'>
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




