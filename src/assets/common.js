const defaultAvatar = 'http://wx.11babay.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/4/3/6/6/5b5ed2afdbd0d.png'

function getGenderInfo(arr, value) {
  for (var i in arr) {
    if (arr[i].id == value) {
      return arr[i].name
    }
  }
}

export {
  defaultAvatar,
  getGenderInfo
}