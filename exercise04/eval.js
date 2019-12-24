function evaluate(expr) {
  let isPlus = true
  let array = expr
    .split(" ")
    .map(el => parseInt(el) || el)
    .reduce((total, current) => {
      if (current === "+" || current === "-") {
        isPlus = current === "+"
      } else {
        if (isPlus) total += current
        else total -= current
      }
      return total
    }, 0)
  return parseInt(array)
}

module.exports = evaluate;