// 1. TDD -> Write tests, Implement, Refactor
const evaluate = require("./eval")

test('single literal number should be return that number', () => {
  expect(evaluate("1")).toBe(1)
})

test('1 + 1 should be 2', () => {
  expect(evaluate("1 + 1")).toBe(2)
})

test('5 - 4 should be 1', () => {
  expect(evaluate("5 - 4")).toBe(1)
})

test('11 + 11 should be 22', () => {
  expect(evaluate("11 + 11")).toBe(22)
})

test('14 - 15 should be -1', () => {
  expect(evaluate("14 - 15")).toBe(-1)
})

test('1 + 1 + 1 should be 3', () => {
  expect(evaluate("1 + 1 + 1")).toBe(3)
})

test('11 + 12 - 13 should be 10', () => {
  expect(evaluate("11 + 12 - 13")).toBe(10)
})

test('1 + 1 + 1 - 1 - 1 - 1 should be 0', () => {
  expect(evaluate("1 + 1 + 1 - 1 - 1 - 1")).toBe(0)
})

test('1 + 1 + 1 - 1 - 1 - -1 should be 2', () => {
  expect(evaluate("1 + 1 + 1 - 1 - 1 - -1")).toBe(2)
})