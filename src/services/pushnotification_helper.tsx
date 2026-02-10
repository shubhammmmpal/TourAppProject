import messaging from '@react-native-firebase/messaging';
import { NavigationContainerRef } from '@react-navigation/native';
import { onDisplayNotification } from './foreground_helper';
import { handleNotificationNavigation } from '../utils/navigationHelper';
import { setFcmToken } from '../redux/slice/AuthSlice';
import store from '../redux/Store';

export async function requestUserPermission() {
  try {
    const authStatus = await messaging().requestPermission({
      alert: true,
      announcement: false,
      badge: true,
      carPlay: true,
      provisional: false,
      sound: true,
    });
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    console.log('FCM Authorization status:', authStatus);
    if (enabled) {
      const token = await messaging().getToken();
      console.log(token, 'tokentoken');
      if (token) {
        store.dispatch(setFcmToken(token));
      }

      messaging().onTokenRefresh((newToken) => {
        console.log(newToken, 'newTokennewToken');

        if (newToken) {
          store.dispatch(setFcmToken(newToken));
        }
      });
    } else {
      console.log('FCM Permission denied');
    }
  } catch (error) {
    console.error('Permission request error:', error);
  }
}

export async function initFCMToken() {
  try {
    await messaging().deleteToken();
    const fcmTokenValue = await messaging().getToken();
    if (fcmTokenValue) {
      store.dispatch(setFcmToken(fcmTokenValue));
    }
    messaging().onTokenRefresh((newToken) => {
      console.log('🔁 FCM token refreshed:', newToken);
      if (newToken) {
        store.dispatch(setFcmToken(newToken));
      }
    });

    return fcmTokenValue;
  } catch (error) {
    console.log('❌ FCM init error:', error);
    return null;
  }
}

let messageListener: () => void;

export const notificationListener = (
  navigationRef: React.RefObject<NavigationContainerRef<any> | null>
) => {  // Remove existing listener if any
  console.log(messageListener, 'messageListener');
  if (messageListener) messageListener();

  // Handle background notifications
  messaging().onNotificationOpenedApp(remoteMessage => {
    if (remoteMessage?.data) {
      console.log(remoteMessage.data, navigationRef,'remoteMessage.data, navigationRef');
      handleNotificationNavigation(remoteMessage.data);
    }
  });

  // Handle killed state notifications
  messaging().getInitialNotification().then(remoteMessage => {
    if (remoteMessage?.data) {
      console.log(remoteMessage?.data, 'remoteMessage?.data',navigationRef);
      setTimeout(() => {
        handleNotificationNavigation(remoteMessage.data);
      }, 1000);
    }
  });

  // Handle foreground notifications
  messageListener = messaging().onMessage(async remoteMessage => {
    console.log('Foreground message:', remoteMessage);
    await onDisplayNotification(remoteMessage);
  });
};


