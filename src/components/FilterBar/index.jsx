import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { FaSearch } from 'react-icons/fa';
import './FilterInput.css';
const FilterBar = () => {
  const { filter, setFilter  } = useContext(GlobalContext);
  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };
  return (
    <div className="filter-input-container">
      <button className="search-icon" onClick={handleSearch}>
        <FaSearch className="search-icon" />
      </button>
      <input
        type="text"
        placeholder="Pokémon"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter-input"
      />
    </div>
  );
};

export default FilterBar;
