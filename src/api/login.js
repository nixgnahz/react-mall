import axios from "axios"
import {url, headers} from "./common"

export const login = ()=> {
  return new Promise((resolve, reject)=> {
    axios.post(url + '/user/login',
      {
        "account": "dandelion",
        "password": "dandelion"
      },
      {
        headers,
      }
    ).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

export const logout = ()=> {
  return new Promise((resolve, reject)=> {
    axios.post(url + '/user/logout',
      {},
      {
        headers
      }
    ).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}