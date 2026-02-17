import React, {  } from 'react';
import { righToLefttAnimation } from '../../utils/CommonFunction';
import { RouteString } from '../../utils/AppString';
import LoginScreen from '../../screen/Auth/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const AuthStack = () => {

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

export default AuthStack;
