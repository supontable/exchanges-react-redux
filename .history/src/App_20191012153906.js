import React from 'react';
import './css/App.css';
import { PocketCarousel } from './components/PocketCarousel';
import { ExchangeInput } from './components/ExchangeInput';

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
