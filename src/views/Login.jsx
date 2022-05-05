import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();

  console.log('location', location);

  async function handleSignInSubmit(e) {
    e.preventDefault();
    console.log('email', email);
    // const user = await signInUser(email, password);
    // setUser(user);
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
    </div>
  )
};
