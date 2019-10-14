import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Exchanges">
      <header className="Exchanges-header">
        <button>Cancel</button>
        <div>Exchanges</div>
        <button>Exchange</button>
      </header>
      <PocketCarousel>
        <ExchangeInput />
      </PocketCarousel>
      <PocketCarousel>
        <ExchangeInput />
      </PocketCarousel>
    </div>
  );
}

export default App;
