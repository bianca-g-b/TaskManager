import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
// import App from './App';
import Homepage from '../Homepage/Homepage';
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from '../../context/Theme';

jest.mock("../../context/AuthProvider.js", () => ({
  useAuthContext: jest.fn(),
}));

// Testing Homepage component
test('Homepage component',async () => {
  render(
    <ThemeProvider>
    <MemoryRouter initialEntries={["/"]}>
      <Homepage />
    </MemoryRouter>
    </ThemeProvider>
  );

  await waitFor(() => {
    const header = screen.getByRole("heading", {name: "About"});
    expect(header).toBeInTheDocument(); 
  });

  await waitFor(() => {
    const description = screen.getByRole("heading", {name: "Breezy Online Planner is a simple, easy-to-use task management app."});
    expect(description).toBeInTheDocument();
  });

  await waitFor(() => {
    const loginLink = screen.getByRole("link", {name: "Login here"});
    expect(loginLink).toBeInTheDocument();
  });

});
