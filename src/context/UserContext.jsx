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
}
