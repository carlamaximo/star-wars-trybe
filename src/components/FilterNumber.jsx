import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

export default function FilterNumber() {
  const {
    data,
    setData,
    filters,
    setFilters,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
  } = useContext(DataContext);

  const handleSearch = ({ target }) => {
    if (target.name === 'column') { setColumn(target.value); }
    if (target.name === 'comparison') { setComparison(target.value); }
    if (target.name === 'value') { setValue(target.value); }
  };

  const handleClick = () => {
    setFilters({
      filterByNumericValues: [
        ...filters.filterByNumericValues, { column, comparison, value },
      ],
    });

    const filter = data.filter((planeta) => {
      switch (comparison) {
      case 'maior que':
        return parseFloat(planeta[column]) > parseFloat(value);
      case 'menor que':
        return parseFloat(planeta[column]) < parseFloat(value);
      default:
        return planeta[column] === value;
      }
    });

    setData(filter);
  };

  return (
    <div>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ handleSearch }
      >
        <option value="population" selected>population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleSearch }
        name="comparison"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        onChange={ handleSearch }
        data-testid="value-filter"
        type="number"
        name="value"
        value={ value }
      />
      <button
        onClick={ handleClick }
        data-testid="button-filter"
        type="button"
      >
        Filtrar
      </button>
    </div>
  );
}
