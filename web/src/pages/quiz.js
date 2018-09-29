import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
const API_URL = ((process.env.NODE_ENV === 'development') ? 'http://localhost:3000' : window.location.origin ) + '/api';

class Question extends Component {
  constructor() {
    super(...arguments);
    this.onChange = ({target: {value}}) => {
      this.props.onAnswer(value);
    };
  }
  render() {
    if(!this.props.question || !this.props.question.answers) {
      return null;
    }
    const options = (this.props.question.answers || []).map(({answer}, index) => {
      const name = this.props.question.problem.replace(/[\s]/gi, '_');
      return (
        <div key={index}>
          <label>
            <input name={name} type="radio" value={answer} onChange={this.onChange} />
            &nbsp;{answer}</label>
        </div>
      );
    });
    return (<div className="Question"><strong>{this.props.question.problem}</strong>{options}</div>);
  }
}

export default class UsersPage extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      passed: false,
      submitted: false,
      lecture: {},
      userAnswer: {
        lecture_id: null,
        questions: {}
      }
    };
    this.onAnswer = (question, answer) => {
      const userAnswer = this.state.userAnswer;
      userAnswer.questions[question._id] = answer;
      this.setState({userAnswer});
    }
    this.onSubmit = () => {
      axios.post(`${API_URL}/quiz`, {...this.state.userAnswer})
      .then(payload => payload.data)
      .then(result => {
        this.setState({passed: result.pass, submitted: true});
      })
      .catch(console.log);
    };
  }
  componentDidMount() {
    return axios.get(`${API_URL}/lecture`)
    .then(payload => payload.data)
    .then(lecture => {
      const {userAnswer} = this.state;
      userAnswer.lecture_id = lecture._id;
      this.setState({userAnswer})
      this.setState({lecture})
    })
    .catch(err => {
      console.error(err);
      throw new Error(err);
    });
  }
  render() {
    if(!this.state.lecture || !this.state.lecture.questions) {
      return null;
    }
    const questions = (this.state.lecture.questions || []).map((question, index) => {
      return (
        <li key={index}>
          <Question question={question} onAnswer={(answer) => this.onAnswer(question, answer)} />
        </li>
      );
    });
    if(this.state.submitted) {
      if(this.state.passed) {
        return (
          <div className="QuizPage">
            <h2>Quiz</h2>
            <div className="alert alert-success">Congratulations! You passed.</div>
          </div>
        );
      }
      return (
        <div className="QuizPage">
          <Redirect to="/redo" />
        </div>
      );
    }

    const disableSubmit = Object.keys(this.state.userAnswer.questions).length !== this.state.lecture.questions.length;
    return (
      <div className="QuizPage">
        <h2>Quiz</h2>
        <h3>{this.state.lecture.title}</h3>
        <ol>{questions}</ol>
        <button type="button" className="btn btn-primary" onClick={this.onSubmit} disabled={disableSubmit}>Submit</button>
      </div>
    );
  }
}
