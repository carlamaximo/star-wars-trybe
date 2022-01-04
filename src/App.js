import React from 'react';
import './App.css';
import Input from './components/Input';
import Table from './components/Table';
import FilterNumber from './components/FilterNumber';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Input />
      <FilterNumber />
      <Table />
    </Provider>
  );
}

export default App;
