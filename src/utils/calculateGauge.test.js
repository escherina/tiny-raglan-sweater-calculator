import { calculateGauge } from "./calculateGauge"

describe("calculateGauge", () => {
  test("throws an error when numberOfStitchesOrRows is not provided", () => {
    expect(calculateGauge).toThrowError()
  })

  test("throws an error when numberOfStitchesOrRows is not a number", () => {
    expect(() => {
      calculateGauge("10.0", 5)
    }).toThrowError()
  })

  test("throws an error when numberOfStitchesOrRows is not a whole or half number", () => {
    expect(() => {
      calculateGauge(10.75, 5)
    }).toThrowError()
  })

  test("throws an error when distanceInCentimetres is not provided", () => {
    expect(() => {
      calculateGauge(5)
    }).toThrowError()
  })

  test("throws an error when distanceInCentimetres is not a number", () => {
    expect(() => {
      calculateGauge(5, "6.5")
    }).toThrowError()
  })

  test.each([
    [20, 4, 5],
    [4, 1, 4],
    [30, 2.5, 12],
    [26.5, 5, 5.3],
  ])(
    "returns the correct gauge when valid arguments are passed",
    (numberOfStitchesOrRows, distanceInCentimetres, expectedResult) => {
      expect(
        calculateGauge(numberOfStitchesOrRows, distanceInCentimetres)
      ).toBe(expectedResult)
    }
  )
})
