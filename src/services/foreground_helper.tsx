import notifee, { AndroidImportance, AndroidStyle, EventType } from '@notifee/react-native';
import { Platform } from 'react-native';
import { NavigationContainerRef } from '@react-navigation/native';
import { handleNotificationNavigation } from '../utils/navigationHelper';

// Add this function to handle initial notification
export const checkInitialNotification = async (navigation: any) => {
  const initialNotification = await notifee.getInitialNotification();
  if (initialNotification) {
    console.log('Initial Notification:', initialNotification);
    handleNotificationNavigation(initialNotification.notification.data, navigation);
  }
};

// Set up background handler (should be outside of any component/function)
notifee.onBackgroundEvent(async ({ type, detail }) => {
  if (type === EventType.PRESS) {
    const { notification } = detail;
    // Store the notification data to be handled when app opens
    await notifee.setNotificationCategories([{
      id: 'background_press',
      actions: [],
    }]);
    
    // Return a promise to ensure the background task completes
    return new Promise(resolve => {
      if (notification?.data?.actionUrl) {
        // The navigation will be handled when app opens
        global.pendingNotificationData = notification.data;
      }
      resolve(null);
    });
  }
});

export async function onDisplayNotification(
  remoteMessage: any,
  navigationRef?: React.RefObject<NavigationContainerRef<any> | null>
) {
  // Request iOS permissions

  if (Platform.OS === 'ios') {
    await notifee.requestPermission({
      sound: true,
      alert: true,
      badge: true,
    });
  }

  // Create channel for Android
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    sound: 'default',
    importance: AndroidImportance.HIGH
  });

    console.log(remoteMessage?.data,'remoteMessageremoteMessage');

  const imageUrl = 'https://unsplash.com/photos/person-diving-on-pool-splashing-water-1qCSGzVEKKQ';
  // Display notification
  await notifee.displayNotification({
    title: remoteMessage?.notification?.title ?? 'WONDRx Provider',
    body: remoteMessage?.notification?.body ?? 'Tap to view the message',
    data: remoteMessage?.data,
    android: {
      channelId,
      smallIcon: 'ic_launcher',
      largeIcon: imageUrl,
      style: imageUrl ? { type: AndroidStyle.BIGPICTURE, picture: imageUrl } : undefined,
      pressAction: {
        id: 'default',
        launchActivity: 'default',
      },
    },
    ios: {
      sound: 'default',
      attachments: imageUrl ? [{ url: imageUrl }] : [],
      foregroundPresentationOptions: {
        badge: true,
        sound: true,
        banner: true,
        list: true,
        alert: true
      },
    }
  });
}

// Single event handlers for both foreground and background
let foregroundEventUnsubscribe: () => void;
let backgroundEventUnsubscribe: () => void;

export const initializeNotifications = (
  navigationRef: React.RefObject<NavigationContainerRef<any> | null>
) => {  // Remove any existing listeners
  if (foregroundEventUnsubscribe) foregroundEventUnsubscribe();
  if (backgroundEventUnsubscribe) backgroundEventUnsubscribe();

  // Set up foreground handler
  foregroundEventUnsubscribe = notifee.onForegroundEvent(({ type, detail }) => {
    if (type === EventType.PRESS && detail.notification?.data) {
      handleNotificationNavigation(detail.notification.data, navigationRef);
    }
  });

  // Set up background handler
  backgroundEventUnsubscribe = notifee.onBackgroundEvent(async ({ type, detail }) => {
    if (type === EventType.PRESS && detail.notification?.data) {
      handleNotificationNavigation(detail.notification.data, navigationRef);
    }
  });

  // Check initial notification
  notifee.getInitialNotification().then(initialNotification => {
    if (initialNotification?.notification?.data) {
      setTimeout(() => {
        handleNotificationNavigation(initialNotification.notification.data, navigationRef);
      }, 1000);
    }
  });
};