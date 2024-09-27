import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const GET_ALL_POKEMONS = gql`
{
    pokemon_v2_pokemon(limit: 10) {
      id
      name
      height
      weight
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;


export const GET_POKEMON_DETAILS = gql`
  query GetPokemonDetails($id: Int!) {
    pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
    }
  }
`;

