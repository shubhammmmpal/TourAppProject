
export const colors = {
  black: "#000000",
  white: "#FFFFFF",
  blue: "#0D6EFD",
  blue78: "#78BEFC",
  blue008: "#0088FF",
  blueCA: "#CAEAFF",

};


export const graySteps = 8
// latest grey color to change all screens background and top bar
export function grayStep(step: number, alpha: number = 1.0): string {
  if (step > graySteps) {
    console.warn(
      `function getGray called with step greater than configured steps. Using ${graySteps} instead.`,
    )
    step = graySteps
  } else if (step < 0) {
    console.warn(
      'function getGray called with step less than zero. Using 0 instead.',
    )
    step = 0
  }
  return `hsla(0, 0%, ${(1 / graySteps) * 100 * (graySteps - step)}%, ${alpha})`
  // return latestGrey
}

// export const black1212 = '#121212'
// export const grey9898 = '#989898'