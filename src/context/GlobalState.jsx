import React, { createContext, useState } from 'react';
import AppReducer from './AppReducer';
import { GET_ALL_POKEMONS } from '../graphql/queries';
import { useQuery } from '@apollo/client';
// Initial state
const initialState = {
    pokemons: [],
    favorites: [],
    filterType: '',
  };

// Create context
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
//   const { loading, error, data } = useQuery(GET_ALL_POKEMONS);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortedPokemon, setSortedPokemon] = useState([]);
  const [sortBy, setSortBy] = useState('id'); // Default sorting by ID
  const [filter, setFilter] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Sorting functions
  const sortById = () => {
    const sortedById = [...sortedPokemon].sort((a, b) =>
      a.id.localeCompare(b.id)
    );
    setSortedPokemon(sortedById);
    setSortBy('id');
  };

  const sortByName = () => {
    const sortedByName = [...sortedPokemon].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setSortedPokemon(sortedByName);
    setSortBy('name');
  };

//   // Filter based on search input
//   const filteredPokemon = sortedPokemon.filter((pokemon) =>
//     pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     pokemon.id.includes(searchTerm)
//   );
  return (
    <GlobalContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        sortedPokemon, 
        setSortedPokemon,
        sortBy, 
        setSortBy,
        // addFavorite,
        // removeFavorite,
        // setFilterType,
        filter, 
        setFilter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
