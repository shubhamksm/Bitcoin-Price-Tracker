import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header';
import PriceDislay from '../PriceDisplay';
import CurrencySelector from '../CurrencySelector';

function App() {

  const sampleData = {
    "USD": {
        "code": "USD",
        "symbol": "&#36;",
        "rate": "37,138.2632",
        "description": "United States Dollar",
        "rate_float": 37138.2632
    },
    "GBP": {
        "code": "GBP",
        "symbol": "&pound;",
        "rate": "27,341.7093",
        "description": "British Pound Sterling",
        "rate_float": 27341.7093
    },
    "EUR": {
        "code": "EUR",
        "symbol": "&euro;",
        "rate": "30,744.8740",
        "description": "Euro",
        "rate_float": 30744.874
    }
  }

  const sampleCurrencyCodes = ["USD", "GBP", "EUR"];

  const [ selectedCurrency, setCurrency ] = useState({
    code: '',
    rate: ''
  });

  const updateCurrency = code => {
    // TODO : Change with actual Data
    setCurrency({ ...sampleData[code] });
  }

  // Temporary Use Effect to mock stub data
  useEffect(() => {
    setCurrency({ ...sampleData["USD"] });
  }, [])

  return (
    <div className="App">
      <Header />
      <PriceDislay currencyCode={selectedCurrency.code} rate={selectedCurrency.rate} />
      <CurrencySelector 
        updateCurrency={updateCurrency} 
        selectedCurrency={selectedCurrency} 
        currencyCodes={sampleCurrencyCodes} 
      />
    </div>
  );
}

export default App;
