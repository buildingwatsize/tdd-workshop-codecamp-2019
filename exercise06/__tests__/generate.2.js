import generateMinMaxAverage from "../generate"
import * as utils from "../utils"

test('returns max min average values', () => {
  // TODO: jest.fn(), mockReturnValueOnce
  const mockFn = jest.fn().mockReturnValueOnce(1).mockReturnValueOnce(2).mockReturnValueOnce(3);
  // Start Backup
  const originalFunction = utils.fetchNumberFromAPI
  // Replace with mock jest fn
  utils.fetchNumberFromAPI = mockFn

  const expected = {min: 1, max: 3, avg: 2};

  const result = generateMinMaxAverage();

  expect(result).toEqual(expected);

  // End Restore
  utils.fetchNumberFromAPI = originalFunction
})