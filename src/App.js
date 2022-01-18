import React from 'react';
import './App.css';
import Table from './components/Table';
import FilterNumber from './components/FilterNumber';
import PlanetsProvider from './context/Provider';

function App() {
  return (
    <div className="body">
      <PlanetsProvider>
        <h1 className="title">Star Wars Project</h1>
        <FilterNumber className="filterNumber" />
        <Table />
      </PlanetsProvider>
    </div>
  );
}

export default App;
