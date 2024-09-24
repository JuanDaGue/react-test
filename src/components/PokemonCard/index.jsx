import React from 'react';
import { Link } from 'react-router-dom';
import './pokemoncard.css'

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      {/* <p className='id'>{pokemon.id}</p>   */}
      <Link to={`/pokemon/${pokemon.name}`}>
        <img src={pokemon.imagen} alt={pokemon.name} />
        <h3>{pokemon.name}</h3>
      </Link>
    </div>
  );
};

export default PokemonCard;
