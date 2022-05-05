import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

// create a UserProvider component to provide components with state

export default function UserProvider({ children }) {
  const [user, setUser] = useState({ email: null });

  // write login and logout functions here
  function login(email, password) {
    console.log('check to see if we hit the login function in UserContext', email, password);

    // first hardcode user
    if (email === 'bob@bob.com' && password === '111111') {
      // set the user in context and should redirect to page they were trying to go to
      setUser({ email: 'bob@bob.com' });
    } else {
      //set an error message of Invalid credentials
      throw new Error('Invalid credentials'); // same as error = { message: 'Invalid Credentials' }
    }
  };

  function logout() {
    //simple logout function just sets email to null
    setUser({ email: null });
  }

  return (
    <UserContext.Provider
      value={{ user, setUser, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

// optional: make a custom hook to just export the user context?
//this makes it so we have fewer imports in our Login page to use context

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used with a UserProvider');
  }

  return context;
};
