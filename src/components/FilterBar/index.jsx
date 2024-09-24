import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const FilterBar = () => {
  const { setFilterType, setSortBy } = useContext(GlobalContext);

  return (
    <div className="filter-bar">
      <label>Filter by Type:</label>
      <select onChange={(e) => setFilterType(e.target.value)}>
        <option value="">All</option>
        <option value="Fire">Fire</option>
        <option value="Water">Water</option>
        <option value="Grass">Grass</option>
        {/* Add more types as needed */}
      </select>

      <div className="sort-buttons">
        <label>Sort by:</label>
        <button onClick={() => setSortBy('name')}>Name</button>
        <button onClick={() => setSortBy('id')}>ID</button>
      </div>
    </div>
  );
};

export default FilterBar;
