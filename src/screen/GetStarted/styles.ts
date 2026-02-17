import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT } from "../../utils/CommonFunction";

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slide: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: SCREEN_HEIGHT / 2, // Adjust height as needed
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 16
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  // Used to add margin around the Title text without using style prop on AppText
  titleWrapper: {
    marginBottom: 10,
  },
  // Used to add margin around the Description text
  descWrapper: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30, // Provides space for dots
    width: '100%',
  },
  dot: {
    height: 8,
    marginHorizontal: 4,
    borderRadius: 4,
    top: -30
  },
  buttonContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  linearGradient: {
    width: '100%',
    height: 56, // Standard touch target size
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButton:{
    height: 40,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 20,
  },
    
});