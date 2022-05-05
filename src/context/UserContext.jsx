import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

// create a UserProvider component to provide components with state

export default function UserProvider({ children }) {
  const [user, setUser] = useState({ email: null });

  return (
    <UserContext.Provider
      value={{ user, setUser }}
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
