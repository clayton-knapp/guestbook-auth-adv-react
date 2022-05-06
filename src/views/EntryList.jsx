import React from 'react';
import { useUser } from '../context/UserContext';
import { createEntry, getEntries } from '../services/entries';
import { useState, useEffect } from 'react';

export default function EntryList() {
  const context = useUser();
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userEntry, setUserEntry] = useState('')
  const id = context.user.id;

  useEffect(() => {
    async function getAndSetEntries() {
      const resp = await getEntries();
      setEntries(resp);
      setIsLoading(false);
    }
    getAndSetEntries();
  }, []);

  

  async function handleSubmitEntry(e) {
    e.preventDefault();

    console.log('stuff', id, userEntry)
    await createEntry({ id, userEntry });


  }

  async function handleLogout() {
    await context.logout();
  }


  return (
    <div>
      <h2>Entries</h2>
      <button
        onClick={handleLogout}
      >Log Out</button>

      <form action=""
        onSubmit={handleSubmitEntry}
      >
        <label htmlFor="entry">
          <textarea
            name="entry"
            type='text'
            id=""
            cols="30"
            rows="10"
            placeholder='Enter text here'
            onChange={(e) => setUserEntry(e.target.value)}
          ></textarea>
          <button
            type="submit"
            aria-label='Submit Entry'
          >Submit</button>
        </label>
      </form>

      {isLoading
        ? <p>Loading entries...</p>
        : (
          entries.map((entry) => {
            <p
              key={entry.id}
            >{entry.content}</p>
          })
        )
      }



    </div>
  )
};
