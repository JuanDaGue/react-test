import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetailsApi } from "../../Api/pokemons";
import getColorByPokemonType from '../../Api/utils/getColorByPokemonType';
import { GlobalContext } from '../../context/GlobalState';
import './pokemondetails.css';
import ReactDOM from 'react-dom';

const PokemonDetails = () => {
  const [pokedetails, setPokedetails] = useState(null);
  const { id } = useParams();
  const { pType, setPType } = useContext(GlobalContext);

  useEffect(() => {
    // Fetch Pokemon details when component mounts
    (async () => {
      try {
        const resp = await getPokemonDetailsApi(id);
        setPokedetails(resp);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  useEffect(() => {
    // Update the Pokemon type only after pokedetails is fetched
    if (pokedetails && pokedetails.types) {
      setPType(pokedetails?.types[0]?.type.name);
    }
  }, [pokedetails, setPType]);

  if (!pokedetails) return null;

  const color = getColorByPokemonType(pType) || "#FFFFFF";

  const portal = ReactDOM.createPortal(
    <p>{pType}</p>,
    document.querySelector('.App')
  );
  // console.log(color);
  //style={{ backgroundColor: color }}
  return (
    <div >
      <h2>{pokedetails.name}</h2>
      <img src={pokedetails.sprites.other["official-artwork"].front_default} alt={pokedetails.name} className='imgdetail' />
      <div className='detailcard'>
        <div className='poketype'>
          <p style={{ backgroundColor: color }}>{pokedetails.types[0].type.name}</p>
        </div>
        <h3 style={{ color: color }}>About</h3>
        <div className="info">
          <div className="info-item">
            <div className='info-item-img'>

            <img src="../../public/weight.png" alt="weight icon" /> 
            <p>{`${pokedetails.weight} kg`}</p>
            </div>
            <div className='info-name'>
              weight
            </div>
          </div>
          <div className="info-item border">
          <div className='info-item-img '>
              <img src="../../public/Heigth.png" alt="height icon" />
              <p>{`${pokedetails.height} m`}</p>
            </div>
              <div className='info-name'> Heigth
            </div>
          </div>
          <div className="info-item">
          <div className='info-item-move'>
            <p>{pokedetails.moves[0].move.name}</p>
            </div>
            <div className='info-name'>
              weight
            </div>
          </div>
        </div>
        <div className='desccription'>
      {pokedetails.abilities.map((abilityItem, index) => (
          <li key={index}>
            <a href={abilityItem.ability.url} target="_blank" rel="noopener noreferrer">
              {abilityItem.ability.name}
            </a>
            {abilityItem.is_hidden && <span> (Hidden)</span>}
          </li>
        ))}
        </div>   

        <div className="table-container">
  <h2 style={{ color: color }}>Pokémon Stats</h2>
  <table>
  <thead>
    <tr>
      <th style={{ color: color }}>Stat Name</th>
      <th style={{ color: color }}>Base Stat</th>
      <th style={{ color: color }}>Skill Bar</th>
    </tr>
  </thead>
  <tbody>
    {pokedetails.stats.map((stat, index) => (
      <tr key={index}>
        <td className="stat-name">
          <a
            style={{ color: color }}
            href={stat.stat.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {stat.stat.name}
          </a>
        </td>
        <td className="base-stat">{stat.base_stat}</td>
        <td>
          <div className="skill-bar">
            <div className="fill" style={{ width: `${stat.base_stat}%` }}></div>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>

</div>

      </div>

    </div>
  );
};

export default PokemonDetails;
