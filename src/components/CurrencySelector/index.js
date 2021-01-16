import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import './CurrencySelector.css';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  },
  select: {
    fontWeight: 500,
    fontSize: '24px',
    color: '#eeeeee',
  },
}));

const CurrencySelector = ({ updateCurrency, selectedCurrency, currencyCodes }) => {

  const classes = useStyles();

  return <div className="CurrencySelector">
    <FormControl className={classes.formControl}>
      <label htmlFor="currency-select">Select Currency</label>
      <Select
        labelId="currency-select"
        id="currency-select"
        variant="outlined"
        width="100%"
        className={classes.select}
        value={selectedCurrency.code}
        onChange={event => updateCurrency(event.target.value)}
      >
        {currencyCodes.map(value => 
          <MenuItem value={value} key={value}>{value}</MenuItem>
        )}
      </Select>
    </FormControl>
  </div>
}

export default CurrencySelector;