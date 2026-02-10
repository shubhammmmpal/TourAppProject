import { createNavigationContainerRef } from '@react-navigation/native';
import { RouteString } from './AppString';

export const navigationRefs = createNavigationContainerRef();

export function resetToHome() {
  if (!navigationRefs.isReady()) {
    console.log('🚫 Navigation not ready');
    return;
  }

}
