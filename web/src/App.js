import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.png';

import HomePage from './pages/home';
import AdminPage from './pages/admin';
import QuizPage from './pages/quiz';
import RedoPage from './pages/redo';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const API_URL = ((process.env.NODE_ENV === 'development') ? 'http://localhost:3000' : window.location.origin ) + '/api';

class App extends Component {
  constructor() {
    super(...arguments);
    this.reset = () => {
      axios.post(`${API_URL}/quiz/reset`, {});
    }
  }
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
          <div>
            Paul Barretto&nbsp;
            <button type="button" className="btn btn-sm btn-default" onClick={this.reset}>Reset</button>
          </div>
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/quiz" component={QuizPage} />
            <Route exact path="/redo" component={RedoPage} />
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
