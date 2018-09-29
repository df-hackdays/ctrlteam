import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './home.scss';
const API_URL = ((process.env.NODE_ENV === 'development') ? 'http://localhost:3000' : window.location.origin ) + '/api';

export default class UsersPage extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      lecture: null
    };
  }
  componentDidMount() {
    return axios.get(`${API_URL}/lecture`)
    .then(payload => payload.data)
    .then(lecture => {
      this.setState({lecture})
    })
    .catch(console.log);
  }
  render() {
    if(!this.state.lecture) {
      return null;
    }
    const yid = this.state.lecture.vlink;
    const link = `https://www.youtube.com/embed/${yid}`;
    return (
      <div className="HomePage">
        <h2>Welcome to {this.state.lecture.title}</h2>
        <iframe
          className="video-player"
          width="560"
          height="315"
          src={link}
          frameBorder="0"
          allow="autoplay;
          encrypted-media" allowFullScreen></iframe>
        <Link to="/quiz" className="btn btn-primary">Quiz</Link>
      </div>
    );
  }
}
