import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_ALL_POKEMONS } from '../../graphql/queries';
import './pokemonlist.css'

const PokemonList = ({ addFavorite }) => {
  const { loading, error, data } = useQuery(GET_ALL_POKEMONS);
  const [filter, setFilter] = useState('');
  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading Pokémon data</p>;

  const filteredPokemons = data.gen3_species.filter(pokemon =>
    pokemon.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (e) => setFilter(e.target.value);

  return (
    <div>
      <h2>Pokémon List</h2>
      <input
        type="text"
        placeholder="Filter by type"
        onChange={handleFilterChange}
      />
      <ul>
        {filteredPokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`/pokemon/${pokemon.id}`}>{pokemon.id}</Link>
            <button onClick={() => addFavorite(pokemon)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
