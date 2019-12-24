// 1. TDD -> Write tests, Implement, Refactor
const findSecondMax = require("./findSecondMax")

test('empty array ([]) should be throw error', () => {
  expect(() => findSecondMax([])).toThrow("Can't Find Second Max")
})

test('single literal number array ([1]) should be throw error', () => {
  expect(() => findSecondMax([1])).toThrow("Can't Find Second Max")
})

test('[1, 2, 3, 4] should be 3', () => {
  expect(findSecondMax([1, 2, 3, 4])).toBe(3)
})

test('[4, 2, 3, 1] should be 3', () => {
  expect(findSecondMax([4, 2, 3, 1])).toBe(3)
})

test('[4, 2] should be 2', () => {
  expect(findSecondMax([4, 2])).toBe(2)
})

test('[2, 2, 2] should be Error', () => {
  expect(() => findSecondMax([2, 2, 2])).toThrow("Can't Find Second Max")
})

test('[2, 2, 4] should be Error', () => {
  expect(findSecondMax([2, 2, 4])).toBe(2)
})

test('["4", "2"] (also works on array of string like number) should be 2', () => {
  expect(findSecondMax(["4", "2"])).toBe(2)
})