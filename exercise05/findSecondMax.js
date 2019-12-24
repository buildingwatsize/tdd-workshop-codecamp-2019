function findSecondMax(array) {
    let uniqueArray = [...new Set(array.sort())]
    if (uniqueArray.length >= 2) {
      return parseInt(uniqueArray[uniqueArray.length - 2])
    } else {
      throw new Error("Can't Find Second Max")
    }
}

module.exports = findSecondMax;