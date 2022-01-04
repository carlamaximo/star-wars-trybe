import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ filterByName: { name: '' } });
  const [filters, setFilters] = useState({ filterByNumericValues: [] });
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const contextValue = { data,
    setData,
    filter,
    setFilter,
    filters,
    setFilters,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
  };

  const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const apiRequest = async () => {
    const response = await fetch(ENDPOINT);
    const responseJson = await response.json();
    setData(responseJson.results);
  };

  useEffect(() => { apiRequest(); }, []);

  return <DataContext.Provider value={ contextValue }>{children}</DataContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
