import React, { createContext, useState, useEffect } from 'react';
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

  const [searchTerm, setSearchTerm] = useState('');
  const [sortedPokemon, setSortedPokemon] = useState([]);
  const [sortBy, setSortBy] = useState('id'); // Default sorting by ID
  const [filter, setFilter] = useState('');
  const [sortType, setSortType] = useState('name');
  const [pType, setPType] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsArray, setPokemonsArray] = useState([]);
  
  const { loading, error, data } = useQuery(GET_ALL_POKEMONS);
  // // if (loading) return <p>Loading...</p>;
  useEffect(() => {
    if (data && Array.isArray(data.pokemon_v2_pokemon)) {
      const fetchedPokemons = data.pokemon_v2_pokemon.map((pokemon) => {
        // Check if `sprites` is already an object, no need to JSON.parse if it is
        const sprites = typeof pokemon.pokemon_v2_pokemonsprites[0].sprites === 'string'
          ? JSON.parse(pokemon.pokemon_v2_pokemonsprites[0].sprites)
          : pokemon.pokemon_v2_pokemonsprites[0].sprites;

        return {
          id: pokemon.id,
          name: pokemon.name,
          imagen: sprites.other['official-artwork'].front_default,
        };
      });

      setPokemons(fetchedPokemons);
    }
  }, [data]);

  // Handle loading and error
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
/// Use For Api rest
  // useEffect(() => {
  //   (async () => {
  //     await loadPokemons();
  //   })();
  // }, []);
  
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
  
  
  
  // console.log('data->', data.pokemon_v2_pokemon)
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
