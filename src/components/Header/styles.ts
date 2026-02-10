import { Platform, StyleSheet } from "react-native";
import { rw } from "../../helper/responsiveUtils";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../utils/Colors";

export const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    paddingHorizontal: rw(16),
    backgroundColor: 'transparent',
  },
  middleView: {
    justifyContent: "center",
    alignItems: "center",
  },
  backICon: {
    width: rw(40),
    height: rw(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 33,
    width: 33,
    borderRadius: 100
  },
  gap:{
    flexDirection: "row",
    alignItems: "center",
    gap:rw(18),
    justifyContent:'center',
  }
})
