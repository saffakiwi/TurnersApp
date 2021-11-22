import { render, screen } from '@testing-library/react';
import App from './App';

test('insurance', () => {
  render(<App />);
  const linkElement = screen.getByText(/insurance/i);
  expect(linkElement).toBeInTheDocument();
});
