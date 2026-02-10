import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, PermissionsAndroid, Platform, StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  createNavigationContainerRef,
  DefaultTheme,
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import Toast, {
  BaseToast,
  BaseToastProps,
  ErrorToast,
} from 'react-native-toast-message';
import { colors } from './src/utils/Colors';
import Routes from './src/navigation/Routes';
import store, { persistor } from './src/redux/Store';
import InternetBox from './src/components/InternetBox';
import { navigationRefs } from './src/utils/PushNotificationHelper';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import SplashScreen from './src/screen/SplashScreen';


const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const navigationRef = React.useRef<NavigationContainerRef<any>>(null);
  //  const navigationRef = createNavigationContainerRef();

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

  const toastConfig = {
    success: (props: BaseToastProps) => (
      <BaseToast
        {...props}
        text1NumberOfLines={0}
        text2NumberOfLines={0}
        style={{
          borderLeftColor: colors.green,
        }}
      />
    ),
    error: (props: BaseToastProps) => <ErrorToast {...props} text1NumberOfLines={0}
      text2NumberOfLines={0} />,
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
                barStyle={'light-content'}
              />
              <InternetBox />
              <BottomSheetModalProvider>
                <NavigationContainer
                  ref={navigationRefs}
                  theme={MyTheme}
                  onReady={() => {
                    // Navigation is ready
                    console.log('Navigation is ready');
                  }}
                >
                  {loading ? <SplashScreen /> : <Routes />}
                </NavigationContainer>
              </BottomSheetModalProvider>
              <Toast config={toastConfig} visibilityTime={1500} />
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

