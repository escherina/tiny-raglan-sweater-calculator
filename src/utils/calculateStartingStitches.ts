export function calculateStartingStitches(
  gauge: number,
  neckCircumference: number
) {
  return Math.round(gauge * neckCircumference)
}
