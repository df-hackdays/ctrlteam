import React, { Component } from 'react';
import { getUsers } from './service';

export default class UsersPage extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    getUsers().then(users => this.setState({users}));
  }
  render() {
    const users = this.state.users.map((user, index) => (<div key={index}>{user.full_name}  -> {user.age}</div>));
    return (
      <div className="UsersPage">
        <h2>Students</h2>
        {users}
      </div>
    );
  }
}
