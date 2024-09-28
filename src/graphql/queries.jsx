import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const GET_ALL_POKEMONS = gql`
{
    pokemon_v2_pokemon(limit: 151) {  # You can change the limit based on how many you want
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
      order
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

