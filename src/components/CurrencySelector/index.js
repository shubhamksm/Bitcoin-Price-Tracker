import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const CurrencySelector = ({ updateCurrency, selectedCurrency, currencyCodes }) => {

  return <div className="CurrencySelector">
    <Select
      labelId="currency-select"
      id="currency-select"
      value={selectedCurrency.code}
      onChange={event => updateCurrency(event.target.value)}
    >
      {currencyCodes.map(value => 
        <MenuItem value={value} key={value}>{value}</MenuItem>
      )}
    </Select>
  </div>
}

export default CurrencySelector;