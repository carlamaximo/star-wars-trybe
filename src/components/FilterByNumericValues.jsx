import React, { useContext, useState } from 'react';
import DataContext from '../context/DataContext';
import SelectFilter from './SelectFilter';

const COLUMN_FILTERS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];
const COMPARISON_FILTERS = ['maior que', 'menor que', 'igual a'];

function FilterByNumericValues() {
  const { filters, setFilters } = useContext(DataContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const newColumnFilters = COLUMN_FILTERS.filter(
    (filter) => !filters.filterByNumericValues.some((f) => f.column === filter),
  );

  const handleAddFilter = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });

    // reset form value
    setColumn('');
    setValue('');
  };

  return (
    <>
      <SelectFilter
        dataTestId="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
        options={ newColumnFilters }
        value={ column }
      />
      <SelectFilter
        dataTestId="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
        options={ COMPARISON_FILTERS }
        value={ comparison }
      />
      <input
        data-testid="value-filter"
        min="0"
        onChange={ ({ target }) => setValue(target.value) }
        placeholder="Filter by value"
        type="number"
        value={ value }
      />
      <button
        data-testid="button-filter"
        onClick={ handleAddFilter }
        type="button"
      >
        Filter
      </button>
    </>
  );
}

export default FilterByNumericValues;
