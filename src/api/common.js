import axios from "axios";

const api = {
  login: 'user/login',
  logout: 'user/logout',
  position: 'position/prev-id',
  address: 'address',
  user: 'user/info',
  gender: 'keyword/gender',
  category: 'product-category'
}

var instance = axios.create({
  baseURL: 'https://www.consolestack.com/api/dandelion/',
  withCredentials: true
})

export {
  api,
  instance
}


