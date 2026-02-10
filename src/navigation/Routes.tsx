import React, { useEffect, useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { righToLefttAnimation } from '../utils/CommonFunction';
import { RouteString } from '../utils/AppString';
import LoginScreen from '../screen/Auth/LoginScreen';


const Stack = createStackNavigator();

const Routes = () => {

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, ...righToLefttAnimation }}
      initialRouteName={RouteString.LOGINSCREEN}>
      <Stack.Screen
        name={RouteString.LOGINSCREEN}
        component={LoginScreen}
      />
    
    </Stack.Navigator>
  );
};

export default Routes;
