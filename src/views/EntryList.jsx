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
  const email = context.user.email;

  // console.log('context', context);

  useEffect(() => {
    async function getAndSetEntries() {
      const resp = await getEntries();
      setEntries(resp);
      setIsLoading(false);
    }
    getAndSetEntries();
  }, []);

  async function refreshEntries() {
    const resp = await getEntries();
    setEntries(resp);
    setIsLoading(false);
  }

  // console.log('entries', entries);

  async function handleSubmitEntry(e) {
    e.preventDefault();

    // console.log('stuff', id, userEntry)
    await createEntry({ userId: id, content: userEntry });

    //clear form
    setUserEntry('');
    
    refreshEntries();
  }

  return (
    <div>
      <h2>Create an Entry</h2>
      <form action=""
        onSubmit={handleSubmitEntry}
      >
        <textarea
          value={userEntry}
          name="entry"
          type='text'
          id=""
          cols="30"
          rows="10"
          placeholder='Enter text here'
          onChange={(e) => setUserEntry(e.target.value)}
        ></textarea>
        <br></br>
        <button
          type="submit"
          aria-label='Submit Entry'
        >Submit</button>
      </form>

      {isLoading
        ? <p>Loading entries...</p>
        : (
          <>
            <h2>Entries</h2>
            <ul>
              {entries.map((entry) => 
                <div key={entry.id}>
                  <h3>{email} at {new Date(entry.created_at).toLocaleString()}</h3>
                  <p>{entry.content}</p>
                </div>
              )}
            </ul>
          </>
        )
      }
    </div>
  )
};
