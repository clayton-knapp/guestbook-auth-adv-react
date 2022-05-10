import React from 'react';
import { useUser } from '../context/UserContext';


export default function Header() {
  const context = useUser();
  const email = context.user.email;

  async function handleLogout() {
    await context.logout();
  }

  return (
    <header>
      <h2>Guestbook</h2>
      {
        email
          && (
          <>
            <p>Currently logged in as: {email}</p>
            <button
              onClick={handleLogout}
            >Log Out</button>
          </>
          )
      }
    </header>
  )
}
