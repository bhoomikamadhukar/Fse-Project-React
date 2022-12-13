import axios from "axios";
// const BASE_URL = "http://tuiter-env.eba-pi7ebyvw.us-east-2.elasticbeanstalk.com";
// const BASE_URL = "https://software-engineering-node-fa22.herokuapp.com/api";
const BASE_URL = "http://localhost:4000";

const LOGIN_API = `${BASE_URL}/api/login`;
const USERS_API = `${BASE_URL}/api/users`;


export const createUser = (user) =>
  axios.post(`${USERS_API}`, user)
    .then(response => response.data);

  export const updateUser = (user) =>
    axios.put(`${USERS_API}/${user.id}`, user)
      .then((response) => response.data)


// export const updateUser = (uid,user) =>
//     fetch(`${USERS_API}/${uid}`, {
//         method: 'PUT',
//         body: JSON.stringify(user),
//         headers: {'content-type': 'application/json'}
//     })
//         .then(response => response.data)


export const findAllUsers = () =>
  axios.get(USERS_API)
    .then(response => response.data);

  export const findAllUsersAsAdmin = () =>
    axios.get(`${USERS_API}`)
      .then(response => response.data);

export const findUserById = (uid) =>
  axios.get(`${USERS_API}/${uid}`)
    .then(response => response.data);

export const deleteUser = (uid) =>
  axios.delete(`${USERS_API}/${uid}`)
    .then(response => response.data);

export const deleteUsersByUsername = (username) =>
  axios.get(`${USERS_API}/username/${username}/delete`)
    .then(response => response.data);

export const findUserByCredentials = (credentials) =>
  axios.post(`${LOGIN_API}`, credentials)
    .then(response => response.data);

const service = {
  findAllUsers
}

export default service;
