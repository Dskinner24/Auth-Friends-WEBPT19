import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path='/protected' component={FriendsList} />
          <Route path='/login' component={LoginForm} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
