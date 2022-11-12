export function calculateGauge(
  numberOfStitchesOrRows: number,
  distanceInCentimetres: number
) {
  if (numberOfStitchesOrRows % 1 !== 0 && numberOfStitchesOrRows % 1 !== 0.5) {
    throw new Error(
      "numberOfStitchesOrRows must either be a whole number or have a decimal value of 0.5."
    )
  }

  return numberOfStitchesOrRows / distanceInCentimetres
}
