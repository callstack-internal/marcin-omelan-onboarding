// import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Config from 'react-native-config';
import { ForecastWeather } from '../../schema/Weather';

export const useForecastWeather = (cityId: number) => {
    return useQuery<ForecastWeather>({
        queryKey: ['forecastWeather', cityId], queryFn: async () => {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${Config.OWM_API_KEY}`
            );
            return response.json();
        },
    });
};
