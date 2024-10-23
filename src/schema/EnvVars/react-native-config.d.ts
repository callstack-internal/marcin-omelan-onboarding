declare module 'react-native-config' {
    export interface NativeConfig {
        OWM_API_KEY?: string;
    }

    export const Config: NativeConfig;
    export default Config;
}
