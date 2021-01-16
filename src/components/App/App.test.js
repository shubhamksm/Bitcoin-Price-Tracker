import { render, screen } from '@testing-library/react';
import App from './';

test('Checks App Snapshot', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
