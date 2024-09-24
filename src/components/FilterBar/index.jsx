import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { FaSearch } from 'react-icons/fa';
import './FilterInput.css';
const FilterBar = () => {
  const { setFilterType, setSortBy,filter, setFilter  } = useContext(GlobalContext);
  return (
    <div className="filter-input-container">
      <input
        type="text"
        placeholder="Filter Pokémon"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter-input"
      />
      <FaSearch className="search-icon" />
    </div>
  );
};

export default FilterBar;
