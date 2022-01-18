import React, { useContext, useState } from 'react';
import DataContext from '../context/DataContext';
import CurrentFilters from './CurrentFilters';
import FilterByNumericValues from './FilterByNumericValues';
import Order from './Order';
import '../App.css';

export default function FilterNumber() {
  const { filters, setFilters } = useContext(DataContext);

  const [name, setName] = useState('');

  const handleNameChange = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
    setName(target.value);
  };

  return (
    <>
      <input
        data-testid="name-filter"
        onChange={ handleNameChange }
        placeholder="Filter by name"
        type="text"
        value={ name }
      />
      <FilterByNumericValues />
      <Order />
      <CurrentFilters />
    </>
  );
}
