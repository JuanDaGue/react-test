import React from 'react';
import { Link } from 'react-router-dom';
import './pokemoncard.css'

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <Link to={`/pokemon/${pokemon.name}`}>
        <img src={pokemon.image} alt={pokemon.name} />
        <h3>{pokemon.name}</h3>
      </Link>
    </div>
  );
};

export default PokemonCard;
