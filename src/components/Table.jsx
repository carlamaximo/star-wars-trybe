import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../context/DataContext';

export default function Table() {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  async function fetchData() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const { filters } = useContext(DataContext);
  const { filterByName, filterByNumericValues, order } = filters;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(({ results }) => setData(results));
  }, []);

  const filterPlanetsByName = data.filter((planet) => {
    if (filterByName.name) {
      return planet.name
        .toLowerCase()
        .includes(filterByName.name.toLowerCase());
      // case insensitive
    }
    return true;
  });

  const filterPlanetsByNumericValues = filterPlanetsByName.filter((planet) => {
    if (filterByNumericValues.length > 0) {
      return filterByNumericValues.every((filter) => {
        const value = Number(planet[filter.column]);

        switch (filter.comparison) {
        case 'maior que':
          return value > Number(filter.value);
        case 'menor que':
          return value < Number(filter.value);
        case 'igual a':
          return value === Number(filter.value);
        default:
          return true;
        }
      });
    }
    return true;
  });

  const compareNumbers = (a, b, sort) => (sort === 'ASC' ? a - b : b - a);

  const compareStrings = (a, b, sort) => {
    const MIN_VALUE = -1;
    if (sort === 'ASC') {
      return a > b ? 1 : MIN_VALUE;
    }
    return a < b ? 1 : MIN_VALUE;
  };

  const orderPlanets = filterPlanetsByNumericValues.sort((a, b) => {
    const valueA = a[order.column];
    const valueB = b[order.column];

    if (
      order.column === 'rotation_period'
      || order.column === 'orbital_period'
      || order.column === 'diameter'
      || order.column === 'surface_water'
    ) {
      return compareNumbers(Number(valueA), Number(valueB), order.sort);
    }
    return compareStrings(valueA, valueB, order.sort);
  });

  const HEADER = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
    'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films',
    'Created', 'Edited', 'URL'];

  return (
    <table>
      <thead>
        <tr>{HEADER.map((title) => <th key={ title }>{ title }</th>)}</tr>
      </thead>
      <tbody>
        { orderPlanets.map((planet) => (
          <tr key={ planet.name }>
            <td data-testid="planet-name">{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>))}
      </tbody>
    </table>
  );
}
