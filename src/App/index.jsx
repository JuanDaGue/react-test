import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from '../components/PokemonList';
import PokemonDetails from '../components/PokemonDetails';
import Favorites from '../components/Favorites';
import Filter from '../components/Filter';
import { GlobalProvider } from '../context/GlobalState'
import SortButtons from '../components/SortButtons';
import FilterBar from '../components/FilterBar';
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

              <Routes>
                <Route path="/" element={<PokemonList addFavorite={addFavorite} />} />
                <Route path="/pokemon/:id" element={<PokemonDetails />} />
                <Route path="/favorites" element={<Favorites favorites={favorites} />} />
              </Routes>
              {/* <Filter /> */}
            </div>
          </Router>
      </GlobalProvider>
  );
}

export default App;



