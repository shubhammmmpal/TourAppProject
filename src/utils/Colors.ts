
export const colors = {
  black: "#000000",
  white: "#FFFFFF",
  balck26:"#262626",
  grey_646:"#646363",
  grey_F8:"#F8F8F8",
  grey_EB:"#EBEBEB",
  grey_F6:"#F6F6F6",
  grey_EEEE:"#EEEEEE",
  grey_8E:"#8E8E8E",
  border_light_grey:"#8F8F8F",
  text_dark_grey:'#3C3C3C',
  button_Bg:"#ED4357",
  grey_ED:"#EDEDED",
  forgot_text:"#EA3064",
  grey_65:"#656565",
  grey_86:"#868686",
  failed_red: "#BE0B0B",
  green:"#1E9E9E",
  grey_7D:'#7D7D7D',
  checkbox_grey:"#C4C4C4",
  grey_35:"#353535",
  grey_F4:"#F4F4F4",
  grey_D8:"#D8D8D8",
  grey_7B:"#7B7B7B",
  grey_F2:"#F2F2F2",
  grey_D9:"#D9D9D9",
  grey_E0:"#E0E0E0",
  orange_primary:"#F7931E"
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