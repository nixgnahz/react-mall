import axios from "axios"
import {url, headers} from "./common"

const getPositionInfo = (prevId = 1)=> {
  return new Promise((resolve, reject)=> {
    axios.get(url + '/position/prev-id/' + prevId,
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

export default getPositionInfo