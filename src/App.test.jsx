import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import UserProvider from './context/UserContext';


// import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { server } from './setupTests';
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
    
    // NEW Mock data with 3 entries 
    const dataThreeEntries = [
      {
        "id": 318,
        "guest_id": "MOCK_ID_12345",
        "content": "Post #2",
        "created_at": "2022-05-06T23:33:45.910957+00:00"
      },
      {
        "id": 317,
        "guest_id": "MOCK_ID_12345",
        "content": "Hello World",
        "created_at": "2022-05-06T23:33:40.391909+00:00"
      },
      {
        "id": 327,
        "guest_id": "MOCK_ID_12345",
        "content": "Some Crazy Third Thing",
        "created_at": "2022-05-06T23:49:17.879706+00:00"
      }
    ]; 

    // server.use instance with 3 entry data
    server.use(
      rest.get('https://ezwbsacoojmonmiqffad.supabase.co/rest/v1/entries', (req, res, ctx) =>
        res(ctx.json(dataThreeEntries))
      )
    );


    // COMMENTED OUT TO GET CI PASSING

    const submitButton = screen.getByRole('button', {
      name: /submit entry/i
    });
  
    userEvent.click(submitButton);

    await screen.findByText(/some crazy third thing/i);


  });



});