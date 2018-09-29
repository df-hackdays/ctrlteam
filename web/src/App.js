import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import logo from './logo.png';

import HomePage from './pages/home';
import AdminPage from './pages/admin';
import QuizPage from './pages/quiz';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="logo">
            <Link to="/">
            <img src={logo} alt="" />
            <h1>Class Room</h1>
            </Link>
          </div>
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/quiz" component={QuizPage} />
          </Switch>
        </div>
        <div className="footer">
          <div className="container">
            Canada Learning Code
          </div>
        </div>
      </div>
    );
  }
}

export default App;
