import React from 'react';
import './PriceDisplay.css';
import getSymbolFromCurrency from 'currency-symbol-map'

const PriceDisplay = ({ currencyCode, rate }) => {
  return <div className="PriceDisplay">
    <h1>Price</h1>
    <h1>{getSymbolFromCurrency(currencyCode)} {rate}</h1>
  </div>
}

export default PriceDisplay;