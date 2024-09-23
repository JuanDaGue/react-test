import React from 'react';
import './filter.css'
const Filter = ({ onFilterChange }) => (
  <div>
    <h3>Filter by Type</h3>
    <select onChange={(e) => onFilterChange(e.target.value)}>
      <option value="">All</option>
      <option value="Fire">Fire</option>
      <option value="Water">Water</option>
      <option value="Grass">Grass</option>
    </select>
  </div>
);

export default Filter;
