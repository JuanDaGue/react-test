import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from '../components/PokemonList';
import PokemonDetails from '../components/PokemonDetails';
import Favorites from '../components/Favorites';
import Filter from '../components/Filter';
import SearchBar from '../components/FilterBar'
import { SiPokemon } from 'react-icons/si';
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
              <div className='header'>
                <div className='pokedex'>
                  <img src="../../public/pokeball.png" alt="Pokeball"         className="pokeball-icon" />
                  <h1>Pokémon App</h1>
                </div>
                <div className='pokefilters'>

                <FilterBar/>
                <SortButtons />
                </div>
              </div>
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



