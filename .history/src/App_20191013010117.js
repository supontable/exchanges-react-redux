import React from 'react';
import './css/App.css';
import { PocketCarousel } from './components/PocketCarousel';

function App() {
  return (
    <div className="Exchanges">
      <header className="Exchanges-header">
        <button>Cancel</button>
        <div>Exchanges</div>
        <button>Exchange</button>
      </header>
      <PocketCarousel />
      <PocketCarousel />
    </div>
  );
}

export default App;
