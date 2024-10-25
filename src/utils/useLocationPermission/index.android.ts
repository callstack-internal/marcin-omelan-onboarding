import { PermissionsAndroid } from 'react-native';

const useLocationPermission = () => {
    const getPermission = async () => {
        const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION);
        return granted;
    };
    const askPermission = async () => {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION);
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    };
    return { getPermission, askPermission };
};

export default useLocationPermission;
