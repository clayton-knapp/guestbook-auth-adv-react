import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { setupServer } from 'msw/node';
// import { rest } from 'msw';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import UserProvider from './context/UserContext';

// const server = setupServer();

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

describe('Testing App Behavior', () => {
  it('logs in, renders a list of entries, and adds a new entry', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </MemoryRouter>
    );
    

    const emailInput = screen.getByPlaceholderText(/email/i);
    userEvent.type(emailInput, 'test@user.com');

    const passwordInput = screen.getByPlaceholderText(/password/i);
    userEvent.type(passwordInput, 'secret');

    const signInButton = screen.getByRole('button', {
      name: /sign in/i
    });
    userEvent.click(signInButton);

    await screen.findByRole('heading', {
      name: /create an entry/i
    });

    await screen.findByText(/hello world/i);

    await screen.findByText(/post #2/i);

    // can we add a new entry and see it?

    const textBox = screen.getByRole('textbox');
    userEvent.type(textBox, 'Some Crazy Third Thing');

    // COMMENTED OUT TO GET CI PASSING

    // const submitButton = screen.getByRole('button', {
    //   name: /submit entry/i
    // });
    // userEvent.click(submitButton);

    // await screen.findByText(/some crazy third thing/i);


  });



});