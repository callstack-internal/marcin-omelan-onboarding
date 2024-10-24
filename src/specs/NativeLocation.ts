import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
    getLocation(): Promise<{ longitude: number; latitude: number }>;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
    'NativeLocation',
) as Spec;
