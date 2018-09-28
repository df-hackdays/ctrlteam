import axios from 'axios';
//const API_URL = `${window.location.origin}/api/`
const API_URL = ((process.env.NODE_ENV === 'development') ? 'http://localhost:3000' : window.location.origin ) + '/api';
//const API_URL = `http://localhost:3000/api/`

export const getUsers = () => {
  return axios.get(`${API_URL}/users`)
    .then(payload => payload.data)
    .catch(err => {
      console.error(err);
      throw new Error(err);
    });
};
