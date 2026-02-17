import React, { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Platform, StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { colors } from './src/utils/Colors';
import Routes from './src/navigation/Routes';
import store, { persistor } from './src/redux/Store';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import SplashScreen from './src/screen/SplashScreen';


const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.white,
    },
  };


  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <View style={{ flex: 1, backgroundColor: 'white' }}>
                <StatusBar
                  translucent
                  backgroundColor="transparent"
                  barStyle={'dark-content'}
                />
                {/* <InternetBox /> */}
                <BottomSheetModalProvider>
                  <NavigationContainer
                    theme={MyTheme}
                    onReady={() => {
                      // Navigation is ready
                      console.log('Navigation is ready');
                    }}
                  >
                    {loading ? <SplashScreen /> : <Routes />}
                  </NavigationContainer>
                </BottomSheetModalProvider>

                {Platform.OS == 'android' && (
                  <SafeAreaView style={{ backgroundColor: colors.white }} />
                )}
              </View>
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </GestureHandlerRootView>
  );
};

export default App

