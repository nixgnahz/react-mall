import {api, instance} from "./common";

const getAddressList = ()=> {
  return new Promise((resolve, reject)=> {
    instance.get(api.address).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

const addAddress = (params)=> {
  return new Promise((resolve, reject)=> {
    instance.post(api.address, params).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

const editAddress = (addressId, params)=> {
  return new Promise((resolve, reject)=> {
    instance.put(api.address + '/' + addressId, params).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

const deleteAddress = (addressId)=> {
  return new Promise((resolve, reject)=> {
    instance.delete(api.address + '/' + addressId).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

export {
  getAddressList,
  addAddress,
  editAddress,
  deleteAddress
}