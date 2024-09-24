export default (state, action) => {
    switch (action.type) {
      case 'SET_POKEMONS':
        return {
          ...state,
          pokemons: action.payload,
        };
      case 'ADD_FAVORITE':
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      case 'REMOVE_FAVORITE':
        return {
          ...state,
          favorites: state.favorites.filter((pokemon) => pokemon.id !== action.payload),
        };
      case 'SET_FILTER':
        return {
          ...state,
          filterType: action.payload,
        };
      case 'SET_SORT':
        return {
          ...state,
          sortBy: action.payload,
        };
      default:
        return state;
    }
  };
  