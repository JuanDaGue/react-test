import React, { createContext, useState, useEffect } from 'react';
import AppReducer from './AppReducer';
import { GET_ALL_POKEMONS } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../Api/pokemons";
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
  const [sortType, setSortType] = useState('name');
  const [pType, setPType] = useState('');
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


  const [pokemons, setPokemons] = useState([]);
  console.log("pokemons--->", pokemons);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();

      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          imagen:
            pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <GlobalContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        sortedPokemon, 
        setSortedPokemon,
        filter, 
        setFilter,
        sortType,
        setSortType,
        pokemons, 
        setPokemons,
        pType,
        setPType,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
