import React from 'react';
import './favorites.css'
const Favorites = ({ favorites }) => {
  if (favorites.length === 0) return <p>No favorites added yet.</p>;
  return (
    <div>
      <h2>Your Favorites</h2>
      <ul>
        {favorites.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
