import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home';
import AdminPage from './pages/admin';
import QuizPage from './pages/quiz';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1>Ctrl Team</h1>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/quiz" component={QuizPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
