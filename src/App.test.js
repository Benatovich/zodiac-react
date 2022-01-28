import { render, screen } from '@testing-library/react'
import App from './App'

test('2022', () => {
  render(<App />);
  const linkElement = screen.getByText(/2022/i);
  expect(linkElement).toBeInTheDocument();
})
