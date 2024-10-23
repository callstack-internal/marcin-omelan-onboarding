import { OWMIcons } from '../../schema/Weather';

const iconsToVector: {
    [K in OWMIcons]: string;
} = {
    '01d': 'weather-sunny',
    '01n': 'weather-night',
    '02d': 'weather-partly-cloudy',
    '02n': 'weather-night-partly-cloudy',
    '03d': 'weather-cloudy',
    '03n': 'weather-cloudy',
    '04d': 'weather-cloudy',
    '04n': 'weather-cloudy',
    '09d': 'weather-pouring',
    '09n': 'weather-pouring',
    '10d': 'weather-partly-rainy',
    '10n': 'weather-partly-rainy',
    '11d': 'weather-lightning',
    '11n': 'weather-lightning',
    '13d': 'weather-snowy',
    '13n': 'weather-snowy',
    '50d': 'weather-hazy',
    '50n': 'weather-hazy',
};


const mapIconsToCondition = (icon: OWMIcons): string => {
    return iconsToVector[icon];
};

export default mapIconsToCondition;
