import { render, fireEvent, cleanup } from '@testing-library/react';
import CurrencySelector from './';

beforeEach(() => {
  jest.resetAllMocks();
});

afterEach(() => {
  cleanup();
});

it('Should call updateState on Change of Currency code', () => {
  
  const sampleCurrencyCodes = ["USD", "GBP", "EUR"];
  const updateCurrency = jest.fn();
  const selectedCurrency = {
    "code": "USD",
    "symbol": "&#36;",
    "rate": "37,138.2632",
    "description": "United States Dollar",
    "rate_float": 37138.2632  
  };

  const { container } = render(<CurrencySelector 
    updateCurrency={updateCurrency} 
    selectedCurrency={selectedCurrency} 
    currencyCodes={sampleCurrencyCodes} 
  />);

  fireEvent.click(container.querySelector('#currency-select'));
  fireEvent.change(container.querySelector('.CurrencySelector').querySelector('input'), { target: { value: 'GBP' } });
  expect(updateCurrency).toHaveBeenCalledWith('GBP');
});