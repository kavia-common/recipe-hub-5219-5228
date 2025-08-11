import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Recipe Hub header', () => {
  render(<App />);
  const title = screen.getByText(/Recipe Hub/i);
  expect(title).toBeInTheDocument();
});
