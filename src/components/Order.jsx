import React, { useContext, useState } from 'react';
import DataContext from '../context/DataContext';
import SelectFilter from './SelectFilter';
import '../App.css';

const OPTIONS = [
  'name',
  'population',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'orbital_period',
  'rotation_period',
  'created',
  'edited',
  'url',
];

export default function Order() {
  const { filters, setFilters } = useContext(DataContext);

  const [order, setOrder] = useState('name');
  const [sort, setSort] = useState('ASC');

  const handleSort = () => {
    setFilters({
      ...filters,
      order: {
        column: order,
        sort,
      },
    });
  };

  return (
    <>
      <SelectFilter
        dataTestId="column-sort"
        onChange={ ({ target: { value } }) => setOrder(value) }
        options={ OPTIONS }
        value={ order }
      />
      <label htmlFor="column-sort-input-asc" className="radio">
        <input
          checked={ sort === 'ASC' }
          data-testid="column-sort-input-asc"
          id="column-sort-input-asc"
          name="column-sort-input"
          onChange={ ({ target: { value } }) => setSort(value) }
          type="radio"
          value="ASC"
        />
        Ascending
      </label>
      <label htmlFor="column-sort-input-desc" className="radio">
        <input
          checked={ sort === 'DESC' }
          data-testid="column-sort-input-desc"
          id="column-sort-input-desc"
          name="column-sort-input"
          onChange={ ({ target: { value } }) => setSort(value) }
          type="radio"
          value="DESC"
        />
        Descending
      </label>
      <button
        data-testid="column-sort-button"
        onClick={ () => handleSort() }
        type="button"
      >
        Order
      </button>
    </>
  );
}
