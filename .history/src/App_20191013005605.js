import React from 'react';
import './css/App.css';
import { PocketCarousel } from './components/PocketCarousel';
const data = [
  {
    base: 'USD',
    balance: 1000,
    symbol: '$'
  },
  {
    base: 'GBP',
    balance: 500,
    symbol: '£'
  },
  {
    base: 'EUR',
    balance: 700,
    symbol: '€'
  }
]
function App() {
  return (
    <div className="Exchanges">
      <header className="Exchanges-header">
        <button>Cancel</button>
        <div>Exchanges</div>
        <button>Exchange</button>
      </header>
      <PocketCarousel from>
      </PocketCarousel>
      <PocketCarousel>
      </PocketCarousel>
    </div>
  );
}

export default App;
