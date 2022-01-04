import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

export default function Table() {
  const { data } = useContext(DataContext);
  console.log('data', data);

  const HEADER = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
    'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films',
    'Created', 'Edited', 'URL'];
  return (
    <table>
      <thead>
        <tr>{HEADER.map((title) => <th key={ title }>{ title }</th>)}</tr>
      </thead>
      <tbody>
        { data.map((planet) => (
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
            {/* <td>{planet.residents}</td> */}
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>))}
      </tbody>
    </table>
  );
}
