import React from 'react';
import './PriceDisplay.css';

const PriceDisplay = ({ currencyCode, rate }) => {
  return <div className="PriceDisplay">
    <h1>Price</h1>
    <h1>{currencyCode} {rate}</h1>
  </div>
}

export default PriceDisplay;