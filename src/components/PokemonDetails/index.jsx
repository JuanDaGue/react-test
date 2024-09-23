import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_DETAILS } from '../../graphql/queries';
import './pokemondetails.css'
const PokemonDetails = () => {
  const { name } = useParams();
  const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
    variables: { name },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading Pokémon details</p>;

  const { pokemon } = data;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>Type: {pokemon.types.join(', ')}</p>
      <p>Weight: {pokemon.weight.minimum} - {pokemon.weight.maximum}</p>
      <p>Height: {pokemon.height.minimum} - {pokemon.height.maximum}</p>
    </div>
  );
};

export default PokemonDetails;
