import React from 'react';
import { useUser } from '../context/UserContext';

export default function EntryList() {
  const context = useUser();


  async function handleLogout() {
    await context.logout();
  }


  return (
    <div>
      <h2>Entries</h2>
      <button
        onClick={handleLogout}
      >Log Out</button>



    </div>
  )
};
