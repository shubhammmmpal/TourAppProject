import React, { useEffect, useRef } from 'react';
import { righToLefttAnimation } from '../utils/CommonFunction';
import { RouteString } from '../utils/AppString';
import LoginScreen from '../screen/Auth/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack/AuthStack';
import GetStartedScreen from '../screen/GetStarted';
import BottomStack from './BottomStack/BottomStack';


const Stack = createNativeStackNavigator();

const Routes = () => {

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, ...righToLefttAnimation }}
      initialRouteName={RouteString.GETSTARTEDSCREEN}>
      
      <Stack.Screen
        name={RouteString.GETSTARTEDSCREEN}
        component={GetStartedScreen}
      />
      <Stack.Screen
        name={RouteString.AUTH}
        component={AuthStack}
      />
      <Stack.Screen
        name={RouteString.BOTTOMSTACK}
        component={BottomStack}
      />
    
    </Stack.Navigator>
  );
};

export default Routes;
