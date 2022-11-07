export function calculateStartingStitches(gauge, neckCircumference) {
  if (gauge === undefined) {
    throw new Error("The gauge argument is missing.")
  }

  if (neckCircumference === undefined) {
    throw new Error("The neckCircumference argument is missing.")
  }

  if (typeof gauge !== "number") {
    throw new Error("The gauge argument must be a number.")
  }

  if (typeof neckCircumference !== "number") {
    throw new Error("The neckCircumference argument must be a number.")
  }

  return Math.round(gauge * neckCircumference)
}
