import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
// import App from './App';
import Homepage from '../Homepage/Homepage';
import Login from '../Login/Login';
import CreateTask from '../CreateTask/CreateTask';
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

// Testing Login component
test("Login component", async () => {
  render(
    <ThemeProvider>
      <MemoryRouter initialEntries={["/login"]}>
        <Login />
      </MemoryRouter>
    </ThemeProvider>
  );

  await waitFor(() => {
    const email = screen.getByLabelText("Email address");
    expect(email).toBeInTheDocument();
  });

  await waitFor(() => {
    const password = screen.getByLabelText("Your Password");
    expect(password).toBeInTheDocument();
  });

  await waitFor(() => {
    const loginButton = screen.getByRole("button", {name: "Sign in"});
    expect(loginButton).toBeInTheDocument();
  });

  await waitFor(() => {
    const forgotPasswordLink = screen.getByRole("link", {name: "Forgot your password?"});
    expect(forgotPasswordLink).toBeInTheDocument();
  });

  await waitFor(() => {
    const signupLink = screen.getByRole("link", {name: "Don't have an account? Sign up"});
    expect(signupLink).toBeInTheDocument();
  });
  
  await waitFor(() => {
    const aboutLink = screen.getByRole("link", {name: "Go back to the about page"});
    expect(aboutLink).toBeInTheDocument();
  });

})

// Testing CreateTask component
test("CreateTask component", async () => {
  render(
    <ThemeProvider>
      <MemoryRouter initialEntries={["/tasks/addtask"]}>
        <CreateTask />
      </MemoryRouter>
    </ThemeProvider>
  );

  await waitFor(() => {
    const backToAllTasksLink = screen.getByRole("link", {name: "⇽ Back to Tasks"});
    expect(backToAllTasksLink).toBeInTheDocument();
  });

  await waitFor(() => {
    const title = screen.getByLabelText("Title of Task");
    expect(title).toBeInTheDocument();
  });

  await waitFor(() => {
    const content = screen.getByLabelText("Content");
    expect(content).toBeInTheDocument();
  });

  await waitFor(() => {
    const deadline = screen.getByLabelText("End Date");
    expect(deadline).toBeInTheDocument();
  });

  await waitFor(() => {
    const addTaskButton = screen.getByRole("button");
    expect(addTaskButton).toBeInTheDocument();
  });

})
