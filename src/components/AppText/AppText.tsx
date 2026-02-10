import { View, Text, StyleSheet, StyleProp, TextStyle, Animated } from 'react-native'
import React from 'react'
import { fonts } from '../../utils/typography'
import { AppTextProps } from '../../utils/Types'


const AppText = ({ size, top, color, family, align, width, height, underlineColor, underline, onPress, transform, numLines, spacing, horizontal, children, testID, customColor, dotMode, animateValue, maxWidth, opacity, lineHeight, handleTextLayout, textDecorationStyle, fontStyle }: AppTextProps) => {

  let fontFamily: any
  switch (family) {
    case 'Montserrat-Black': {
      fontFamily = fonts.MontserratBlack
      break
    }
    case 'Montserrat-Italic': {
      fontFamily = fonts.MontserratItalic
      break
    }
    
    case 'Montserrat-Bold': {
      fontFamily = fonts.MontserratBold
      break
    }
    case 'Montserrat-Medium': {
      fontFamily = fonts.MontserratMedium
      break
    }
    case 'Montserrat-Light': {
      fontFamily = fonts.MontserratLight
      break
    }
    case 'Montserrat-Regular': {
      fontFamily = fonts.MontserratRegular
      break
    }
    case 'Montserrat-ExtraBold': {
      fontFamily = fonts.MontserratExtraBold
      break
    }
    case 'Montserrat-ExtraLight': {
      fontFamily = fonts.MontserratExtraLight
      break
    }
    case 'Montserrat-SemiBold': {
      fontFamily = fonts.MontserratSemiBold
      break
    }
    case 'Montserrat-Thin': {
      fontFamily = fonts.MontserratThin
      break
    }

  }
  const style: StyleProp<TextStyle> = {
    color: color ? color : 'black',
    fontSize:  size,
    fontFamily: fontFamily,
    textAlign: align,
    textTransform: transform,
    letterSpacing: spacing,
    paddingTop: top,
    paddingHorizontal: horizontal,
    textDecorationLine: underline,
    textDecorationColor: underlineColor,
    textDecorationStyle: textDecorationStyle,
    width: width,
    height: height,
    maxWidth: maxWidth,
    opacity: opacity ? opacity : 1,
    lineHeight: lineHeight,
    fontStyle: fontStyle,
    
  }
  return (
    <Animated.Text style={[style, animateValue && { transform: [{ scale: animateValue }], }]} numberOfLines={numLines} ellipsizeMode={dotMode} onPress={onPress} onTextLayout={handleTextLayout}>{children}</Animated.Text>
  )
}
const styles = StyleSheet.create({
  mainText: {}
})

export default AppText