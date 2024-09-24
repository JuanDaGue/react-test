import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from '../components/PokemonList';
import PokemonDetails from '../components/PokemonDetails';
import Favorites from '../components/Favorites';
import Filter from '../components/Filter';
import SearchBar from '../components/FilterBar'

import { GlobalProvider } from '../context/GlobalState'
function App() {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (pokemon) => {
    setFavorites([...favorites, pokemon]);
    localStorage.setItem('favorites', JSON.stringify([...favorites, pokemon]));
  };

  return (
      <GlobalProvider>
        <Router>
            <div className="App">
              <h1>Pokémon App</h1>
              <Routes>
                <Route path="/" element={<PokemonList addFavorite={addFavorite} />} />
                <Route path="/pokemon/:name" element={<PokemonDetails />} />
                <Route path="/favorites" element={<Favorites favorites={favorites} />} />
              </Routes>
              <Filter />
            </div>
          </Router>
      </GlobalProvider>
  );
}

export default App;



