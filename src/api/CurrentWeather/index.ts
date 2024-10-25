// import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Config from 'react-native-config';
import { CurrentWeather } from '../../schema/Weather';
import { apiUrl } from '..';

export const useCurrentWeather = (cityId: number) => {
    return useQuery<CurrentWeather>({
        queryKey: ['currentWeather', cityId], queryFn: async () => {
            const response = await fetch(
                `${apiUrl}/weather?id=${cityId}&units=metric&appid=${Config.OWM_API_KEY}`
            );
            return response.json();
        },
    });
};

export const useCurrentWeatherForLocation = (location: { longitude: number, latitude: number } | undefined) => {
    return useQuery<CurrentWeather>({
        queryKey: ['currentWeather', location], queryFn: async () => {
            const response = await fetch(
                `${apiUrl}/weather?lat=${location?.latitude}&lon=${location?.longitude}&units=metric&appid=${Config.OWM_API_KEY}`
            );
            return response.json();
        },
        enabled: !!location,
    });
};
