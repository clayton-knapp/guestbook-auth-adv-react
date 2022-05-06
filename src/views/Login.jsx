import React from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory();
  const context = useUser();

  // console.log('location', location);

  async function handleSignInClick(e) {
    try {
      e.preventDefault();
      // login function from contex
      await context.login(email, password);

      // check to see if we have from url in location object
      // const url = location.state.from
      //   ? location.state.from.pathname
      //   : '/';
      
      // redirect to url
      history.replace('/');
      
      // console.log('context from handleSubmit in Login', context);
    } catch (error) {
      // catches the error thrown on line 20 of UserContext
      setError(error.message);
    }

  }

  async function handleSignUpClick(e) {
    try {
      e.preventDefault();
      // login function from context
      await context.signUp(email, password);

      // check to see if we have from url in location object
      // const url = location.state.from
      //   ? location.state.from.pathname
      //   : '/';
      
      // redirect to url
      history.replace('/');
      
      // console.log('context from handleSubmit in Login', context);
    } catch (error) {
      // catches the error thrown on line 20 of UserContext
      setError(error.message);
    }
  }



  return (
    <div>
      <h3>Sign Up/Sign In</h3>
      <form action=""
        // onSubmit={handleSignInSubmit}
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
          onClick={handleSignInClick}
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
