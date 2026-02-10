import Geolocation from '@react-native-community/geolocation';
import { Platform, PermissionsAndroid } from 'react-native';

export const getCurrentLocation = async () => {

    try {
        if (Platform.OS === 'android') {

            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );

            if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                throw new Error("Location permission denied");
            }
        }

        return new Promise((resolve, reject) => {

            Geolocation.getCurrentPosition(

                (position) => {

                    resolve({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });

                },

                (error) => {
                    reject(error);
                },

                {
                    enableHighAccuracy: true,
                    timeout: 15000,
                    maximumAge: 10000,
                }

            );

        });

    } catch (error) {
        throw error;
    }
};
