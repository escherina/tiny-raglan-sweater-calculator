/**
 *
 * @param {number} numberOfStitchesOrRows Either a whole or half number, representing the number of stitches or rows.
 * @param {number} distanceInCentimetres The distance across which `numberOfStitchesOrRows` was measured. Should be in centimetres.
 */
export function calculateGauge(numberOfStitchesOrRows, distanceInCentimetres) {
  if (numberOfStitchesOrRows === undefined) {
    throw new Error("The numberOfStitchesOrRows argument is missing.")
  }

  if (distanceInCentimetres === undefined) {
    throw new Error("The distanceInCentimetres argument is missing.")
  }

  if (typeof numberOfStitchesOrRows !== "number") {
    throw new Error("numberOfStitchesOrRows must be a number.")
  }

  if (typeof distanceInCentimetres !== "number") {
    throw new Error("distanceInCentimetres must be a number.")
  }

  if (numberOfStitchesOrRows % 1 !== 0 && numberOfStitchesOrRows % 1 !== 0.5) {
    throw new Error(
      "numberOfStitchesOrRows must either be a whole number or have a decimal value of 0.5."
    )
  }

  return numberOfStitchesOrRows / distanceInCentimetres
}
