import React from 'react';
import './App.css';
import { useGetDailyPrices } from './hooks/use-queries';

function App() {
  const data = useGetDailyPrices()

  if (data.length === 0) return null;

  return (
    <div className="App">
      <header className="App-header">
        <h2>Stock Prices</h2>

        <div className="row">
          <p>First</p>
          <p>{data[0].last}</p>
        </div>

        <div className="row">
          <p>Last</p>
          <p>{data[data.length - 1].last}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
