import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Dimensions, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import AppText from '../AppText/AppText'
import { colors } from '../../utils/Colors'
import { SubmitButtonProps } from '../../utils/Types'
import { rw } from '../../helper/responsiveUtils'

const AnimatedBtn = Animated.createAnimatedComponent(Pressable)


const SubmitButton = ({ title, pressing, widthOf, loader, colorChange, opacity, colortext, height, disabled, icon,icon2, disable, fontSize

}: SubmitButtonProps) => {
  const [loading, setLoading] = useState(false);
  const animatedWidth = useSharedValue(widthOf)
  const animatedRadius = useSharedValue(16)

  useEffect(() => {
    if (loader == true) {
      animatedWidth.value = withTiming(50, { duration: 500 });
      animatedRadius.value = withTiming(50, { duration: 500 });
      setLoading(true);
    }
  }, [loader])
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animatedWidth.value,
      borderRadius: animatedRadius.value
    }
  })

  useEffect(() => {
    if (loader == false) {
      setLoading(false);
      // Revert back to initial width after 5 seconds
      animatedWidth.value = withTiming(widthOf, { duration: 500 });
      animatedRadius.value = withTiming(16, { duration: 500 });
    }
  }, [loader])

  return (
    <AnimatedBtn
      style={[
        styles.buttonContainer,
        {
          width: widthOf,
          backgroundColor: colorChange ? colorChange : colors.button_Bg,
          height: height ? height : 50,
        },
        animatedStyle,
      ]}
      onPress={() => {
        pressing();
      }}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator size={32} color={colors.white} />
      ) : (
        <View style={styles.row}>
          
          <AppText
            size={fontSize ? fontSize : 16}
            color={colortext ? colortext : colors.white}
            opacity={opacity ? opacity : 0}
            align="center"
            family={'Montserrat-Bold'}
          >
            {title}
          </AppText>
        </View>

      )}
    </AnimatedBtn>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginTop:rw(10)
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    gap:12
  }
})

export default SubmitButton