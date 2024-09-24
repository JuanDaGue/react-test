import React from "react";
import getColorByPokemonType from "../../Api/utils/getColorByPokemonType";
import FilterBar from "../FilterBar";
import SortButtons from "../SortButtons";
import './header.css'
export default function Header(props) {
//   const { name, order, image, type } = props;
//   const color = getColorByPokemonType(type);

//   const bgStyle = [{ backgroundColor: color, ...styles.bg }];

  return (
    <>
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
    </>
  );
}

// const styles = StyleSheet.create({
//   bg: {
//     width: "100%",
//     height: 400,
//     position: "absolute",
//     borderBottomEndRadius: 300,
//     borderBottomLeftRadius: 300,
//     transform: [{ scaleX: 2 }],
//   },
//   content: {
//     marginHorizontal: 20,
//     marginTop: 30,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingTop: 40,
//   },
//   name: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 27,
//   },
//   order: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   contentImg: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     top: 30,
//   },
//   image: {
//     width: 250,
//     height: 300,
//     resizeMode: "contain",
//   },
// });
// Lecturas recomendadas
// PokéAPI