import React from 'react';
import { Link } from 'react-router-dom';
import './pokemoncard.css'

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <Link to={`/pokemon/${pokemon.id}`}>  
        <h6 className='id'>#0{pokemon.id}</h6>
        <img src={pokemon.imagen} alt={pokemon.name} />
        <h3>{pokemon.name}</h3>
      </Link>
    </div>
  );
};

export default PokemonCard;
