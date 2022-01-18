import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import CurrentFilters from './CurrentFilters';

export default function FilterNumber() {
  const {
    data,
    setData,
    filters,
    setFilters,
    // setFilter,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    columnsOption,
    setColumnsOption,
  } = useContext(DataContext);

  const handleSearch = ({ target }) => {
    if (target.name === 'column') { setColumn(target.value); }
    // console.log(column); // column é o estado inicial setado como 'population'
    // console.log(data[0].population);// é o valor dessa chave. No caso, 20000.
    if (target.name === 'comparison') { setComparison(target.value); }
    if (target.name === 'value') { setValue(target.value); }
  };

  const handleClick = () => {
    setFilters({
      filterByNumericValues: [
        ...filters.filterByNumericValues, { column, comparison, value },
      ],
    });

    const filter1 = data.filter((planeta) => {
      switch (comparison) {
      case 'maior que':
        return parseFloat(planeta[column]) > parseFloat(value);
      case 'menor que':
        return parseFloat(planeta[column]) < parseFloat(value);
      default:
        return planeta[column] === value;
      }
    });

    // console.log('filter1', filter1);
    setFilters(filter1);
    setData(filter1);
    setColumnsOption(columnsOption
      .filter((item) => item !== column));
    // return filter1;
  };

  return (
    <div>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ handleSearch }
      >
        {
          columnsOption.map((option) => (
            <option key={ option } value={ option }>{ option }</option>
          ))
        }
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
      <CurrentFilters />
    </div>
  );
}
