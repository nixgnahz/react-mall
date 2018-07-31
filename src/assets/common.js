export function getGenderInfo(arr, value) {
  for (var i in arr) {
    if (arr[i].id == value) {
      return arr[i].name
    }
  }
}