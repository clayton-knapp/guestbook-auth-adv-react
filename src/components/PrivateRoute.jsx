import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
  // start by hardcoding user
  const user = { email: '' };


  return <Route {...rest}>
    {/* if there is a user email
    the route includes any children
    otherwise redirect to login */}
    {user.email
      ? children
      : <Redirect to='/login' />
    }
  </Route>
}