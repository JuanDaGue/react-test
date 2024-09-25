import React from "react";
import getColorByPokemonType from "../../Api/utils/getColorByPokemonType";
import FilterBar from "../FilterBar";
import SortButtons from "../SortButtons";
import './header.css'
export default function Header(props) {


  return (
    <>
                <div className='header'>
                        <div className='pokedex'>
                        <img src="/Pokeball.png" alt="Pokeball"         className="pokeball-icon" />
                        <h1>Pokémon App</h1>
                        </div>
                        <div className='pokefilters'>

                    <FilterBar/>
                    <SortButtons />
                    </div>
            </div>
    </>
  );
}

