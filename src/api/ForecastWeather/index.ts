// import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Config from 'react-native-config';
import { ForecastWeather } from '../../schema/Weather';
import { apiUrl } from '..';

export const useForecastWeather = (cityId: number) => {
    return useQuery<ForecastWeather>({
        queryKey: ['forecastWeather', cityId], queryFn: async () => {
            const response = await fetch(
                `${apiUrl}/forecast?id=${cityId}&units=metric&appid=${Config.OWM_API_KEY}`
            );
            return response.json();
        },
    });
};
