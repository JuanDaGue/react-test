import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_DETAILS } from '../../graphql/queries';
import './pokemondetails.css'
import { getPokemonDetailsApi } from "../../Api/pokemons"
import getColorByPokemonType from '../../Api/utils/getColorByPokemonType';
const PokemonDetails = () => {
  const [pokedetails, setPokedetails] = useState(null);
  const { id } = useParams();



  // const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
  //   variables: { id},
  // });

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error loading Pokémon details</p>;
  useEffect(() => {
    (async () => {
      try {
        const resp = await getPokemonDetailsApi(id);
        console.log(resp)
        setPokedetails(resp);
      } catch (error) {
        //navigation.goBack();
        console.log(error)
      }
    })();
  }, [id]);
  
  if (!pokedetails) return null;
  const primaryType= pokedetails?.types[0]?.type.name
  const color = getColorByPokemonType(primaryType)|| "#FFFFFF";
  // const bgStyle = [{ backgroundColor: color, ...styles.bg }];
  console.log(color)
  // console.log(pokedetails)
  
  return (
    <div className={`pokemon-detail ${primaryType}`}>
      <h2>{pokedetails.name}</h2>
      <img src={pokedetails.sprites.other["official-artwork"].front_default} alt={pokedetails.name} />
      <p>Type: {pokedetails.types[0].type.name}</p>
      <p>Weight: {pokedetails.weight.minimum} - {pokedetails.weight.maximum}</p>
      <p>Height: {pokedetails.height.minimum} - {pokedetails.height.maximum}</p>
    </div>
  );
};

export default PokemonDetails;
