import axios from "axios";

const api = {
  login: 'user/login',
  logout: 'user/logout',
  position: 'position/prev-id/',
  address: 'address'
}

var instance = axios.create({
  baseURL: 'https://www.consolestack.com/api/dandelion/',
  withCredentials: true
})

export {
  api,
  instance
}


