import { render, screen } from '@testing-library/react';
import App from './App';

test('renders  react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn /i);
  expect(linkElement).toBeInTheDocument();
});
