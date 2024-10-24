import 'react-native';
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Forecast from '.';

// Note: import explicitly to use the types shipped with jest.
import { it } from '@jest/globals';

it('component renders without data', () => {
    render(<Forecast forecastData={[]} />);
    expect(screen.getByTestId('forecast_scrollView')).toBeOnTheScreen();
});

it('component renders with data', () => {
    render(<Forecast forecastData={[{
        dt: 0,
        clouds: { all: 0 },
        weather: [{ id: 0, main: '', description: '', icon: '01d' }],
        main: { temp: 0, pressure: 0, humidity: 0 },
        wind: { speed: 0, deg: 0 },
        rain: undefined,
        snow: undefined,
    }]} />);
    expect(screen.getByTestId('forecast_scrollView')).toBeOnTheScreen();
});


it('all data is rendered', () => {
    render(<Forecast forecastData={[{
        dt: 0,
        clouds: { all: 0 },
        weather: [{ id: 0, main: '', description: '', icon: '01d' }],
        main: { temp: 0, pressure: 0, humidity: 0 },
        wind: { speed: 0, deg: 0 },
        rain: undefined,
        snow: undefined,
    },
    {
        dt: 10,
        clouds: { all: 0 },
        weather: [{ id: 0, main: '', description: '', icon: '01d' }],
        main: { temp: 0, pressure: 0, humidity: 0 },
        wind: { speed: 0, deg: 0 },
        rain: undefined,
        snow: undefined,
    },
    {
        dt: 110,
        clouds: { all: 0 },
        weather: [{ id: 0, main: '', description: '', icon: '01d' }],
        main: { temp: 0, pressure: 0, humidity: 0 },
        wind: { speed: 0, deg: 0 },
        rain: undefined,
        snow: undefined,
    },
    {
        dt: 1110,
        clouds: { all: 0 },
        weather: [{ id: 0, main: '', description: '', icon: '01d' }],
        main: { temp: 0, pressure: 0, humidity: 0 },
        wind: { speed: 0, deg: 0 },
        rain: undefined,
        snow: undefined,
    }]} />);
    expect(screen.getAllByTestId('forecast_hourlyItem')).toHaveLength(4);
});

