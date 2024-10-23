// import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Config from 'react-native-config';
import { CurrentWeather } from '../../schema/Weather';

export const useCurrentWeather = (cityId: number) => {
    return useQuery<CurrentWeather>({
        queryKey: ['currentWeather', cityId], queryFn: async () => {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${Config.OWM_API_KEY}`
            );
            return response.json();
        },
    });
};
