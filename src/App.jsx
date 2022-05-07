import {
  Switch,
  Route,
} from 'react-router-dom';
import Login from './views/Login';
import EntryList from './views/EntryList';
import PrivateRoute from './components/PrivateRoute';
import UserProvider from './context/UserContext';
import Header from './components/Header';



export default function App() {
  return (
    <UserProvider>
      <Header />
      <Switch>

        <Route path='/login'>
          <Login />
        </Route>

        {/* Root path is to guestbook, but protected route
        Redirects to /login if no user */}
        <PrivateRoute path='/'>
          <EntryList />
        </PrivateRoute>

        </Switch>
      </UserProvider>
  );
}
