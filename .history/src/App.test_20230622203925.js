import { render, screen } from '@testing-library/react';
import App from './App/App';

test('renders application', () => {
  render(<App />);
  const appElement = screen.getByTestId('app-test');
  expect(appElement).toBeInTheDocument();
});w
