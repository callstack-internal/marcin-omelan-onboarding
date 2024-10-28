import getMinMaxTemp from './';
import { ForecastWeatherInternal } from '@schema/Weather';

test('getMinMaxTemp', () => {
    const data: ForecastWeatherInternal[] = [
        {
            dt: 0,
            main: {
                temp: 0,
                pressure: 0,
                humidity: 0,
            },
            weather: [
                {
                    id: 0,
                    main: '',
                    description: '',
                    icon: '01d',
                },
            ],
            clouds: {
                all: 0,
            },
            wind: { speed: 0, deg: 0 },
            rain: undefined,
            snow: undefined,
        },
        {
            dt: 0,
            main: {
                temp: -10,
                pressure: 0,
                humidity: 0,
            },
            weather: [
                {
                    id: 0,
                    main: '',
                    description: '',
                    icon: '01d',
                },
            ],
            clouds: {
                all: 0,
            },
            wind: { speed: 0, deg: 0 },
            rain: undefined,
            snow: undefined,
        },
        {
            dt: 0,
            main: {
                temp: 20,
                pressure: 0,
                humidity: 0,
            },
            weather: [
                {
                    id: 0,
                    main: '',
                    description: '',
                    icon: '01d',
                },
            ],
            clouds: {
                all: 0,
            },
            wind: { speed: 0, deg: 0 },
            rain: undefined,
            snow: undefined,
        },
    ];
    expect(getMinMaxTemp(data)).toEqual({ minTemp: -10, maxTemp: 20 });
});


test('getMinMaxTempEquals', () => {
    const data: ForecastWeatherInternal[] = [
        {
            dt: 0,
            main: {
                temp: 0,
                pressure: 0,
                humidity: 0,
            },
            weather: [
                {
                    id: 0,
                    main: '',
                    description: '',
                    icon: '01d',
                },
            ],
            clouds: {
                all: 0,
            },
            wind: { speed: 0, deg: 0 },
            rain: undefined,
            snow: undefined,
        },
        {
            dt: 0,
            main: {
                temp: 0,
                pressure: 0,
                humidity: 0,
            },
            weather: [
                {
                    id: 0,
                    main: '',
                    description: '',
                    icon: '01d',
                },
            ],
            clouds: {
                all: 0,
            },
            wind: { speed: 0, deg: 0 },
            rain: undefined,
            snow: undefined,
        },
        {
            dt: 0,
            main: {
                temp: 0,
                pressure: 0,
                humidity: 0,
            },
            weather: [
                {
                    id: 0,
                    main: '',
                    description: '',
                    icon: '01d',
                },
            ],
            clouds: {
                all: 0,
            },
            wind: { speed: 0, deg: 0 },
            rain: undefined,
            snow: undefined,
        },
    ];
    expect(getMinMaxTemp(data)).toEqual({ minTemp: 0, maxTemp: 0 });
});

test('getMinMaxTempOneDataPoint', () => {
    const data: ForecastWeatherInternal[] = [
        {
            dt: 0,
            main: {
                temp: 0,
                pressure: 0,
                humidity: 0,
            },
            weather: [
                {
                    id: 0,
                    main: '',
                    description: '',
                    icon: '01d',
                },
            ],
            clouds: {
                all: 0,
            },
            wind: { speed: 0, deg: 0 },
            rain: undefined,
            snow: undefined,
        },
    ];
    expect(getMinMaxTemp(data)).toEqual({ minTemp: 0, maxTemp: 0 });
});

test('getMinMaxTempNotEnoughData', () => {
    const data: ForecastWeatherInternal[] = [];
    expect(getMinMaxTemp(data)).toEqual(undefined);
});
