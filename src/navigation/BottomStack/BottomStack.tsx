import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/HomeScreen';
import { RouteString } from '../../utils/AppString';
import { BookingIcon, HeartIcon, HomeIcon, ProfileIcon, SearchIcon } from '../../assets/svgs/BottomTabSvgs';
import { View } from 'react-native';
import AppText from '../../components/AppText/AppText';
import { SCREEN_WIDTH } from '../../helper/responsiveUtils';
import { colors } from '../../utils/Colors';

const Tab = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}>
      <Tab.Screen name={RouteString.HOMESCREEN} component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <View style={{
              height: 66,
              width: SCREEN_WIDTH / 5,
              borderRadius: 33,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 28,
              gap: 3
            }}>
              {<HomeIcon color={focused ? '#0D6EFD' : '#7D848D'} />}
              <AppText size={12} color={focused ? '#0D6EFD' : '#7D848D'} family='AvenirHeavy'>Home</AppText>
            </View>
          ),
        }} />
      <Tab.Screen name={RouteString.MYBOOKINGS} component={HomeScreen}
        options={{
          title: "My Bookings",
          tabBarIcon: ({ focused }) => (
            <View style={{
              height: 66,
              width: SCREEN_WIDTH / 5,
              borderRadius: 33,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 28,
              gap: 3
            }}>
              <BookingIcon color={focused ? '#0D6EFD' : '#4E5155'} />
              <AppText size={12} color={focused ? '#0D6EFD' : '#7D848D'} family='AvenirHeavy'>Bookings</AppText>
            </View>
          )
        }} />
      <Tab.Screen name={RouteString.SEARCH} component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              height: 66,
              width: SCREEN_WIDTH / 5,
              borderRadius: 33,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              
            }}>
              <View style={{height: 44, width: 44, borderRadius: 40, backgroundColor: colors.blue, justifyContent: 'center', alignItems: 'center',}}>
                <SearchIcon />
              </View>
            </View>
          )
        }} />
      <Tab.Screen name={RouteString.SAVED} component={HomeScreen}
        options={{
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <View style={{
              height: 66,
              width: SCREEN_WIDTH / 5,
              borderRadius: 33,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 28,
              gap: 3
            }}>
              <HeartIcon color={focused ? '#0D6EFD' : '#7D848D'} />
              <AppText size={12} color={focused ? '#0D6EFD' : '#7D848D'} family='AvenirHeavy'>Saved</AppText>
            </View>
          )
        }} />
      <Tab.Screen name={RouteString.PROFILE} component={HomeScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <View style={{
              height: 66,
              width: SCREEN_WIDTH / 5,
              borderRadius: 33,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 28,
              gap: 3
            }}>
              <ProfileIcon color={focused ? '#0D6EFD' : '#7D848D'} />
              <AppText size={12} color={focused ? '#0D6EFD' : '#7D848D'} family='AvenirHeavy'>Profile</AppText>
            </View>
          )
        }} />
    </Tab.Navigator>
  );
}

export default BottomStack;