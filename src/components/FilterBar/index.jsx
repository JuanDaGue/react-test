import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const FilterBar = () => {
  const { setFilterType, setSortBy,filter, setFilter  } = useContext(GlobalContext);
  return (
    <input
    type="text"
    placeholder="Filter Pokémon"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
  />
    // <div className="filter-bar">
    //   <label>Filter by Type:</label>
    //   <select onChange={(e) => handleFilterChange(e)}>
    //     <option value="">All</option>
    //     <option value="Fire">Fire</option>
    //     <option value="Water">Water</option>
    //     <option value="Grass">Grass</option>
    //     {/* Add more types as needed */}
    //   </select>

    //   <div className="sort-buttons">
    //     <label>Sort by:</label>
    //     <button onClick={() => setSortBy('name')}>Name</button>
    //     <button onClick={() => setSortBy('id')}>ID</button>
    //   </div>
    // </div>
  );
};

export default FilterBar;
