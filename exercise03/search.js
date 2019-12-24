function search(arr, elem) {
  // the harder way
  let foundAt = -1
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === elem) {
      foundAt = index
      break
    }
  }
  return foundAt
  
  // the easiest way
  // return arr.indexOf(elem)
}

module.exports = search;

