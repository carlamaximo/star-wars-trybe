import React from 'react';
import './App.css';
import Table from './components/Table';
import FilterNumber from './components/FilterNumber';
import PlanetsProvider from './context/Provider';

function App() {
  return (
    <PlanetsProvider>
      <h1>Star Wars Project</h1>
      <FilterNumber />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
