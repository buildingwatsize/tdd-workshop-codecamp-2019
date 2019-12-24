// 1. Design and Write Tests
// 2. Implement Function
const search = require("./search");

function test(title, callback) {
  try {
    callback();
    console.log(`${title}: ✓ test passed!`)
  } catch (e) {
    console.error(e)
    console.log(`${title}: ✕ test failed!`)
  }
}

function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected)
        throw new Error(`${result} is not equal to ${expected}`)
    }
  }
}

// Test Cases
const input = [1, 2, 3]

// input elem: 1
// expected: 0
test(`Input ${input} Find Elem: 1`, () => {
  expect(search(input, 1)).toBe(0);
});

// input elem: 0
// expected: -1
test(`Input ${input} Find Elem: 0`, () => {
  expect(search(input, 0)).toBe(-1);
});

// input elem: 100 | input = []
// expected: -1
test(`Input [] Find Elem: 100`, () => {
  expect(search([], 100)).toBe(-1);
});

