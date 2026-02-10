import { View, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNetInfo } from "@react-native-community/netinfo";
import AppText from '../AppText/AppText';
import { rw } from '../../helper/responsiveUtils';
// import { InterNetIcon, WifiIcon } from '../../assets/svg/InternetIcon';
import { colors } from '../../utils/Colors';
const InternetBox = () => {
  const netInfo = useNetInfo();
  const [internet, setInternet] = useState(false);

  useEffect(() => {
    const reachable = netInfo.isInternetReachable;
    if (reachable === false) {
      setInternet(true);
    } else if (reachable === true) {
      setInternet(false);
    }
  }, [netInfo.isInternetReachable]);

  useEffect(() => {
    if (netInfo.isInternetReachable === false) {
      setInternet(true);
    }
  }, []);

  return (
    <Modal
      visible={internet}
      animationType="fade"
      transparent={true}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: "center", backgroundColor: colors.black }}>

        {/* <InterNetIcon /> */}
        <View style={{ marginTop: 30, gap: 15, paddingHorizontal: rw(45) }}>
          <AppText align='center' size={20} color='white' family='Montserrat-Black'>No internet connection</AppText>
          <AppText align='center' opacity={0.6} size={16} color='white' family='Montserrat-Black'>Please check your internet connection and try again.</AppText>
        </View>
        <View style={{
          position: "absolute",
          bottom: 50,
          width: '100%',
          paddingHorizontal: rw(20),
        }}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: 'space-between',
            paddingHorizontal: rw(20),
            backgroundColor: colors.white,
            height: 54,
            borderRadius: 16
          }}>
            <AppText size={16} color={colors.balck26} family='Montserrat-Black'>You are currently offline</AppText>
            {/* <WifiIcon /> */}
          </View>

        </View>
      </View>
    </Modal>

  )
}

export default InternetBox