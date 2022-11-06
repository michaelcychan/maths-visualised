import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title, pulldown menu, and number grid', () => {
  render(<App />);
  const titleElement = screen.getByText(/一起學數學/i);
  expect(titleElement).toBeInTheDocument();

  const  pullDownMenu = screen.getByText(/要多少格/i);
  expect(pullDownMenu).toBeInTheDocument();

  const grid = document.getElementById("number-grid-container");
  expect(grid).toBeInTheDocument();
});
