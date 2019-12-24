// 1. Writing Tests
// 2. Implement Equal Function
// 3. Implement Code

const sortNumber = require("./sortNumber");

// Test Function
const assertEqual = (first, second) => {
  if (JSON.stringify(first) !== JSON.stringify(second)) throw new Error(`${first} is not equal to ${second}`)
}

let result, expected;

// a > b > c
result = sortNumber(3, 2, 1);
expected = [1, 2, 3];
assertEqual(result, expected)

// a > b == c
result = sortNumber(2, 1, 1);
expected = [1, 1, 2];
assertEqual(result, expected)

// a > b < c | a < c
result = sortNumber(2, 1, 3);
expected = [1, 2, 3];
assertEqual(result, expected)

// a > b < c | a == c
result = sortNumber(2, 1, 2);
expected = [1, 2, 2];
assertEqual(result, expected)

// a > b < c | a > c
result = sortNumber(3, 1, 2);
expected = [1, 2, 3];
assertEqual(result, expected)

// a == b > c
result = sortNumber(2, 2, 1);
expected = [1, 2, 2];
assertEqual(result, expected)

// a == b < c
result = sortNumber(1, 1, 2);
expected = [1, 1, 2];
assertEqual(result, expected)

// a < b > c | a > c
result = sortNumber(1, 3, 2);
expected = [1, 2, 3];
assertEqual(result, expected)

// a < b > c | a == c
result = sortNumber(1, 2, 1);
expected = [1, 1, 2];
assertEqual(result, expected)

// a < b > c | a < c
result = sortNumber(1, 3, 2);
expected = [1, 2, 3];
assertEqual(result, expected)

// a < b < c
result = sortNumber(1, 2, 3);
expected = [1, 2, 3];
assertEqual(result, expected)

// a < b == c
result = sortNumber(1, 2, 2);
expected = [1, 2, 2];
assertEqual(result, expected)

// a == b == c
result = sortNumber(1, 1, 1);
expected = [1, 1, 1];
assertEqual(result, expected)