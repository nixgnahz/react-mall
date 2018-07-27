import axios from "axios";
import url from "./common";

export const login = (params)=> {
  return new Promise((resolve, reject)=> {
    axios.post(url + '/user/login', params).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

export const logout = ()=> {
  return new Promise((resolve, reject)=> {
    axios.post(url + '/user/logout').then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}