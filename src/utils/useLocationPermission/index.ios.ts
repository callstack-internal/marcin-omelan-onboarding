import NativeLocation from '../../specs/NativeLocation';

const useLocationPermission = () => {
    const getPermission = async (): Promise<boolean> => {
        return NativeLocation?.getPermission();
    };
    const askPermission = async (): Promise<boolean> => {
        // NativeLocation.getLocation will ask for permission if it's not granted
        return true;
    };
    return { getPermission, askPermission };
};

export default useLocationPermission;
