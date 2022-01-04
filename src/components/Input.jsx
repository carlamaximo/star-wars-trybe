import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

export default function Input() {
  const { filter, setFilter } = useContext(DataContext);

  function handleChange({ target: { value } }) {
    setFilter({ ...filter, filterByName: { name: value } });
  }

  return (
    <input
      type="text"
      onChange={ handleChange }
      data-testid="name-filter"
    />
  );
}
