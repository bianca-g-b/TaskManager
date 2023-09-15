import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
// import App from './App';
import Homepage from '../Homepage/Homepage';
import Login from '../Login/Login';
import CreateTask from '../CreateTask/CreateTask';
import EditTask from '../EditTask/EditTask';
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from '../../context/Theme';
import {v4 as uuidv4} from "uuid";

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

  const titleInput = screen.getByRole("textbox", {name: "Title of Task"});
  fireEvent.change(titleInput, {target: {value: "Shopping list"}});
  expect(titleInput.value).toBe("Shopping list");

  await waitFor(() => {
    const content = screen.getByLabelText("Content");
    expect(content).toBeInTheDocument();
  });

  const contentInput = screen.getByRole("textbox", {name: "Content"});
  fireEvent.change(contentInput, {target: {value: "Buy tomatoes, carrots, celery and hummus"}});
  expect(contentInput.value).toBe("Buy tomatoes, carrots, celery and hummus");

  await waitFor(() => {
    const deadline = screen.getByLabelText("End Date");
    expect(deadline).toBeInTheDocument();
  });

  const dateInput = screen.getByTestId("date-display");
  fireEvent.change( dateInput, {target: { value: "2023-09-15"}});
  expect(dateInput.value).toBe("2023-09-15");
  
  await waitFor(() => {
    const addTaskButton = screen.getByRole("button");
    expect(addTaskButton).toBeInTheDocument();
  });

})

// Testing EditTask component
const editProps = {
  title: "Shopping",
  content: "Buy tomatoes, carrots, celery and hummus",
  deadline: "2023-09-15",
  status: true,
  id: uuidv4()
}

test("EditTask component", async() => {
  render(
    <ThemeProvider>
      <MemoryRouter initialEntries = {[`/tasks/${editProps.id}`]}>
        <EditTask taskById={editProps} />
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
    const titleInput = screen.getByRole("textbox", {name: "Title of Task"});
    expect(titleInput.value).toBe(editProps.title)
  })

  await waitFor(() => {
    const content = screen.getByLabelText("Content");
    expect(content).toBeInTheDocument();
  });

  await waitFor(() => {
    const contentInput = screen.getByRole("textbox", {name: "Content"});
    expect(contentInput.value).toBe(editProps.content);
  });

  await waitFor(() => {
    const deadline = screen.getByLabelText("End Date");
    expect(deadline).toBeInTheDocument();
  });

  await waitFor(() => {
    const dateInput = screen.getByTestId("date-display");
    expect(dateInput.value).toBe(editProps.deadline);
  });

  await waitFor(() => {
    const markAsDone = screen.getByLabelText("Mark as done");
    expect(markAsDone).toBeInTheDocument();
  });

  await waitFor(() => {
    const statusCheckbox = screen.getByRole("checkbox", {name: "Mark as done"});
    expect(statusCheckbox.value).toBe((editProps.status).toString());
  });

  await waitFor(() => {
    const addTaskButton = screen.getByRole("button");
    expect(addTaskButton).toBeInTheDocument();
  });
  
})
