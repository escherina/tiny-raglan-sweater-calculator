import { calculateStartingStitches } from "./calculateStartingStitches"

describe("calculateStartingStitches", () => {
  test.each([
    [5, 10, 50],
    [2.5, 12.1, 30],
    [1.66, 56.24, 93],
  ])(
    "returns a correct, rounded number of stitches when valid arguments are passed",
    (gauge, neckCircumference, expectedResult) => {
      expect(calculateStartingStitches(gauge, neckCircumference)).toBe(
        expectedResult
      )
    }
  )
})
