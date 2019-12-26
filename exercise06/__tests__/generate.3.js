import generateMinMaxAverage from "../generate"
import * as utils from "../utils"

test('returns max min average values', () => {
// TODO: jest.spyOn, mockImplementation, check fn called 3 times, restore
  const mockFn = jest.fn().mockReturnValueOnce(10).mockReturnValueOnce(10).mockReturnValueOnce(10);
  const mockSpyOn = jest.spyOn(utils, "fetchNumberFromAPI").mockImplementation(mockFn)
  // OR //
  // const mockSpyOn = jest.spyOn(utils, "fetchNumberFromAPI").mockImplementation(() => 10)

  const expected = {min: 10, max: 10, avg: 10};

  const result = generateMinMaxAverage();

  expect(result).toEqual(expected);
  
  // Check called 3 times
  expect(mockSpyOn).toHaveBeenCalledTimes(3)

  // End Restore
  mockSpyOn.mockRestore()
})