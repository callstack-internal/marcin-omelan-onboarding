import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
    getLocation(): { longitude: number; latitude: number };
    getPermission(): Promise<boolean>;
    askPermission(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
    'NativeLocation',
) as Spec;
