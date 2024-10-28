import { adaptNavigationTheme, MD3DarkTheme as DefaultDarkTheme, MD3LightTheme as DefaultLightTheme } from 'react-native-paper';
import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import merge from 'deepmerge';

const lightTheme = {
    ...DefaultLightTheme,
    'colors': {
        'primary': 'rgb(150, 73, 0)',
        'onPrimary': 'rgb(255, 255, 255)',
        'primaryContainer': 'rgb(255, 220, 198)',
        'onPrimaryContainer': 'rgb(49, 19, 0)',
        'secondary': 'rgb(176, 46, 0)',
        'onSecondary': 'rgb(255, 255, 255)',
        'secondaryContainer': 'rgb(255, 219, 209)',
        'onSecondaryContainer': 'rgb(59, 9, 0)',
        'tertiary': 'rgb(0, 95, 175)',
        'onTertiary': 'rgb(255, 255, 255)',
        'tertiaryContainer': 'rgb(212, 227, 255)',
        'onTertiaryContainer': 'rgb(0, 28, 58)',
        'error': 'rgb(186, 26, 26)',
        'onError': 'rgb(255, 255, 255)',
        'errorContainer': 'rgb(255, 218, 214)',
        'onErrorContainer': 'rgb(65, 0, 2)',
        'background': 'rgb(255, 251, 255)',
        'onBackground': 'rgb(32, 26, 23)',
        'surface': 'rgb(255, 251, 255)',
        'onSurface': 'rgb(32, 26, 23)',
        'surfaceVariant': 'rgb(244, 222, 211)',
        'onSurfaceVariant': 'rgb(82, 68, 60)',
        'outline': 'rgb(132, 116, 106)',
        'outlineVariant': 'rgb(215, 195, 183)',
        'shadow': 'rgb(0, 0, 0)',
        'scrim': 'rgb(0, 0, 0)',
        'inverseSurface': 'rgb(54, 47, 43)',
        'inverseOnSurface': 'rgb(251, 238, 232)',
        'inversePrimary': 'rgb(255, 183, 134)',
        'elevation': {
            'level0': 'transparent',
            'level1': 'rgb(250, 242, 242)',
            'level2': 'rgb(247, 237, 235)',
            'level3': 'rgb(244, 231, 227)',
            'level4': 'rgb(242, 230, 224)',
            'level5': 'rgb(240, 226, 219)',
        },
        'surfaceDisabled': 'rgba(32, 26, 23, 0.12)',
        'onSurfaceDisabled': 'rgba(32, 26, 23, 0.38)',
        'backdrop': 'rgba(58, 46, 38, 0.4)',
    },
};

const darkTheme = {
    ...DefaultDarkTheme,
    'colors': {
        'primary': 'rgb(255, 183, 134)',
        'onPrimary': 'rgb(80, 36, 0)',
        'primaryContainer': 'rgb(114, 54, 0)',
        'onPrimaryContainer': 'rgb(255, 220, 198)',
        'secondary': 'rgb(255, 181, 160)',
        'onSecondary': 'rgb(96, 21, 0)',
        'secondaryContainer': 'rgb(135, 33, 0)',
        'onSecondaryContainer': 'rgb(255, 219, 209)',
        'tertiary': 'rgb(165, 200, 255)',
        'onTertiary': 'rgb(0, 49, 95)',
        'tertiaryContainer': 'rgb(0, 71, 134)',
        'onTertiaryContainer': 'rgb(212, 227, 255)',
        'error': 'rgb(255, 180, 171)',
        'onError': 'rgb(105, 0, 5)',
        'errorContainer': 'rgb(147, 0, 10)',
        'onErrorContainer': 'rgb(255, 180, 171)',
        'background': 'rgb(32, 26, 23)',
        'onBackground': 'rgb(236, 224, 218)',
        'surface': 'rgb(32, 26, 23)',
        'onSurface': 'rgb(236, 224, 218)',
        'surfaceVariant': 'rgb(82, 68, 60)',
        'onSurfaceVariant': 'rgb(215, 195, 183)',
        'outline': 'rgb(159, 141, 131)',
        'outlineVariant': 'rgb(82, 68, 60)',
        'shadow': 'rgb(0, 0, 0)',
        'scrim': 'rgb(0, 0, 0)',
        'inverseSurface': 'rgb(236, 224, 218)',
        'inverseOnSurface': 'rgb(54, 47, 43)',
        'inversePrimary': 'rgb(150, 73, 0)',
        'elevation': {
            'level0': 'transparent',
            'level1': 'rgb(43, 34, 29)',
            'level2': 'rgb(50, 39, 32)',
            'level3': 'rgb(57, 43, 35)',
            'level4': 'rgb(59, 45, 36)',
            'level5': 'rgb(63, 48, 39)',
        },
        'surfaceDisabled': 'rgba(236, 224, 218, 0.12)',
        'onSurfaceDisabled': 'rgba(236, 224, 218, 0.38)',
        'backdrop': 'rgba(58, 46, 38, 0.4)',
    },
};

const { LightTheme: _LightTheme, DarkTheme: _DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
    materialLight: lightTheme,
    materialDark: darkTheme,
});

export const RNLightTheme = _LightTheme;
export const RNDarkTheme = _DarkTheme;
export const PaperDarkTheme = darkTheme;
export const PaperLightTheme = lightTheme;
