import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header';
import PriceDislay from '../PriceDisplay';
import CurrencySelector from '../CurrencySelector';

function App() {

  const [ data, setData ] = useState({});
  const [ currencyCodes, setCurrencyCodes ] = useState([]);
  const [ selectedCurrency, setCurrency ] = useState({});

  const updateCurrency = code => {
    setCurrency({ ...data[code] });
  }

  const getData = async () => {
    const response = await axios({ 
      method: 'get',
      url: 'https://api.coindesk.com/v1/bpi/currentprice.json'
    });
    setData({ ...response.data.bpi });
    setCurrencyCodes([ ...Object.keys(response.data.bpi) ]);
  }

  useEffect(() => {
    getData();
  }, []);

  // Default Value
  useEffect(() => {
    setCurrency({ ...data[currencyCodes[0]] });
  }, [currencyCodes])

  return (
    <div className="App">
      <Header />
      {selectedCurrency && <>
        <PriceDislay currencyCode={selectedCurrency.code} rate={selectedCurrency.rate} />
        <CurrencySelector 
          updateCurrency={updateCurrency} 
          selectedCurrency={selectedCurrency} 
          currencyCodes={currencyCodes} 
        />
      </>}
    </div>
  );
}

export default App;
