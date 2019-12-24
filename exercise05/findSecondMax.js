function findSecondMax(array) {
  if (array.length >= 2) {
    array.sort()
    return parseInt(array[array.length - 2])
  } else {
    throw new Error("Can't Find Second Max")
  }
}

module.exports = findSecondMax;