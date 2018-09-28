import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import UsersPage from './pages/users';
import AdminPage from './pages/admin';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={UsersPage} />
          <Route exact path="/admin" component={AdminPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
