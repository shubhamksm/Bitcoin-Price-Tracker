import React from 'react';

const PriceDisplay = ({ currencyCode, rate }) => {
  return <div className="PriceDislay">
    <h1>Price</h1>
    <h1>{currencyCode} {rate}</h1>
  </div>
}

export default PriceDisplay;