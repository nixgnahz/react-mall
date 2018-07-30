import {api, instance} from "./common";

const getPositionInfo = (prevId = 1)=> {
  return new Promise((resolve, reject)=> {
    instance.get(api.position + prevId).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

export default getPositionInfo