import { RouteString } from './AppString';
import { NavigationContainerRef } from '@react-navigation/native';
import { navigationRefs } from './PushNotificationHelper';

export const handleNotificationNavigation = (data: any,
  navigationRef?: React.RefObject<NavigationContainerRef<any> | null>
) => {
  console.log('📩 Notification data:', data);
  // if (!data?.actionUrl || !navigationRef) return;

  if (!navigationRefs.isReady()) {
    console.log('🚫 Navigation not ready');
    return;
  }

  switch (data?.screen) {
    case 'provider_home':
      navigationRefs.reset({
        index: 0,
        routes: [
          {
            name: RouteString.HOMESTACK,
            params: {
              screen: RouteString.HOMESCREEN,
            },
          },
        ],
      });
      break;
    case "care_executive_home":
      navigationRefs.reset({
        index: 0,
        routes: [
          {
            name: RouteString.HOMESTACK,
            params: {
              screen: RouteString.HOMEDELVERYSCREEN,
            },
          },
        ],
      });
      break;
    case 'invitations':
      navigationRefs.navigate(RouteString.INVITATIONSCREEN as never);
      break;
    default:
      console.log('⚠️ Unknown screen:', data?.screen);
  }
};
