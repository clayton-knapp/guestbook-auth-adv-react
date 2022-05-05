import {
  Switch,
  Route,
} from 'react-router-dom';
import Login from './views/Login';
import EntryList from './views/EntryList';



export default function App() {
  return (
    <Switch>

      <Route path='/login'>
        <Login />
      </Route>

      {/* Root path is to guestbook, but protected route
      Redirects to /login if no user */}
      <Route path='/'>
        <EntryList />
      </Route>

    </Switch>
  );
}
