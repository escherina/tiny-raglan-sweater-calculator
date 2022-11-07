import { calculateStartingStitches } from "./calculateStartingStitches"

describe("calculateStartingStitches", () => {
  test("throws an error when the gauge argument is missing", () => {
    expect(calculateStartingStitches).toThrowError()
  })

  test("throws an error when the gauge argument is not a number", () => {
    expect(() => {
      calculateStartingStitches("")
    }).toThrowError()
  })

  test("throws an error when the neckCircumference argument is missing", () => {
    expect(() => {
      calculateStartingStitches(5)
    }).toThrowError()
  })

  test("throws an error when the neckCircumference argument is not a number", () => {
    expect(() => {
      calculateStartingStitches(5, "16")
    }).toThrowError()
  })

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
