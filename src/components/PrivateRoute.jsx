import { Redirect, Route, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function PrivateRoute({ children, ...rest }) {

  const location = useLocation();
  const context = useUser();



  // start by hardcoding user
  // const user = { email: '' };

  // the path='/' is passed in as rest
  return (
    <Route {...rest}>
      {/* if there is a user email
      the route includes any children
      otherwise redirect to login */}
      {context.user.email
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