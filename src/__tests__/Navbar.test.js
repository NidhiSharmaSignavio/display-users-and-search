import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Navbar from '../components/Navbar';

test('should have brand name', () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: '/' }]}>
      <Navbar />
    </MemoryRouter>
  );
  expect(screen.queryByTestId('brand-name')).toBeVisible();
});

test('should have search bar', () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: '/' }]}>
      <Navbar />
    </MemoryRouter>
  );
  expect(screen.queryByTestId('search-bar-container')).toBeVisible();
});
