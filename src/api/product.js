import {instance, api} from "./common";

const getCategory = ()=> {
  return new Promise((resolve, reject)=> {
    instance.get(api.category).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

const getCategoryList = (category_id, page, rows)=> {
  let url = api.category + '/' + category_id + '/product'
  return new Promise((resolve, reject)=> {
    instance.get(url, {
      page: page,
      rows: rows
    }).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

export {
  getCategory,
  getCategoryList
}