import { render } from '@testing-library/react';
import PriceDislay from './';

it('Should display currency in British Pound Sterling', () => {
  const { container, getByText } = render(<PriceDislay currencyCode="GBP" rate="27,341.7093" />);
  expect(getByText(`£ 27,341.7093`)).toBeTruthy();
});

it('Should display currency in United States Dollar', () => {
  const { container, getByText } = render(<PriceDislay currencyCode="USD" rate="37,138.2632" />);
  expect(getByText(`$ 37,138.2632`)).toBeTruthy();
});

it('Should display currency in Euro', () => {
  const { container, getByText } = render(<PriceDislay currencyCode="EUR" rate="30,744.8740" />);
  expect(getByText(`€ 30,744.8740`)).toBeTruthy();
});