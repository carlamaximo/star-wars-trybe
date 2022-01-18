import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

export default function Table() {
  const { data, filter } = useContext(DataContext);
  const { filterByName: { name } } = filter;

  // const compareNumbers = (a, b, sort) => (sort === 'ASC' ? a - b : b - a);

  // const compareStrings = (a, b, sort) => {
  //   const MIN_VALUE = -1;
  //   if (sort === 'ASC') {
  //     return a > b ? 1 : MIN_VALUE;
  //   }
  //   return a < b ? 1 : MIN_VALUE;
  // };

  // const orderPlanets = data.sort((a, b) => {
  //   const valueA = a[order.column];
  //   const valueB = b[order.column];

  //   if (
  //     order.column === 'rotation_period'
  //     || order.column === 'orbital_period'
  //     || order.column === 'diameter'
  //     || order.column === 'surface_water'
  //   ) {
  //     return compareNumbers(Number(valueA), Number(valueB), order.sort);
  //   }
  //   return compareStrings(valueA, valueB, order.sort);
  // });

  const HEADER = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
    'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films',
    'Created', 'Edited', 'URL'];
  return (
    <table>
      <thead>
        <tr>{HEADER.map((title) => <th key={ title }>{ title }</th>)}</tr>
      </thead>
      <tbody>
        { data.filter((nameFilter) => nameFilter.name.includes(name))
          .map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
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
