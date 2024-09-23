import { ApolloClient, InMemoryCache, gql } from '@apollo/client';





export const GET_ALL_POKEMONS = gql`
  query GetAllPokemons {
  gen3_species: pokemon_v2_pokemonspecies(where: {pokemon_v2_generation: {name: {_eq: "generation-iii"}}}, order_by: {id: asc}) {
    name
    id
  }
  generations: pokemon_v2_generation {
    name
    pokemon_species: pokemon_v2_pokemonspecies_aggregate {
      aggregate {
        count
      }
    }
  }
  pokemon_v2_versionname_by_pk(id: 10) {
    id
    name
    pokemon_v2_version {
      id
    }
  }
}
`;

// export const GET_ALL_POKEMONS = gql`
//   query GetAllPokemons {
//     pokemons(first: 151) {
//       id
//       number
//       name
//       image
//       types
//     }
//   }
// `;

export const GET_POKEMON_DETAILS = gql`
  query GetPokemonDetails($name: String!) {
    pokemon(name: $name) {
      id
      name
      number
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      types
      image
    }
  }
`;
