import { Redirect, Route, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
  const location = useLocation();
  // start by hardcoding user
  const user = { email: '' };

  // the path='/' is passed in as rest
  return (
    <Route {...rest}>
      {/* if there is a user email
      the route includes any children
      otherwise redirect to login */}
      {user.email
        ? children
        : <Redirect
          // pass object with pathname and state including from with location object from useLocation hook
          to={{
            pathname: '/login',
            state: { from: location }
          }}
        />
      }
    </Route>
  );
}