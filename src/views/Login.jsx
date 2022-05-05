import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const context = useUser();

  console.log('location', location);

  async function handleSignInSubmit(e) {
    try {
      e.preventDefault();
      context.login(email, password);
      // setUser(user);
    } catch (error) {
      setError(error.message);
    }

  }

  async function handleSignUpClick() {
    console.log('email', email);
    // const user = await signUpUser(email, password);
    // setUser(user);
  }



  return (
    <div>
      <h3>Sign Up/Sign In</h3>
      <form action=""
        onSubmit={handleSignInSubmit}
      >
        <label htmlFor="email">Email: 
          <input
            required
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder='email'
            // value={}
          />
        </label>
        <label htmlFor="password">Password: 
          <input
            required
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            // value={ }
          />
        </label>
        <button
          aria-label="Sign In"
        >Sign-In</button>
        <button
          aria-label="Sign Up"
          onClick={handleSignUpClick}
        >Sign-Up</button>
      </form>
      {/* if login error display here */}
      <p>{error}</p>
    </div>
  )
};
