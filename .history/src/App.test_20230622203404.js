import { render, screen } from '@testing-library/react';
import App from './';

test('renders application', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
