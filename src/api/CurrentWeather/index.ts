// import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Config from 'react-native-config';
import { CurrentWeather } from '../../schema/Weather';

export const useCurrentWeather = (cityIds: number[]) => {
    return useQuery<CurrentWeather[]>({
        queryKey: ['currentWeather', cityIds], queryFn: async () => {
            // Limit of locations is 20 on this empty, so we need to split the request later
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/group?id=${cityIds.join(',')}&units=metric&appid=${Config.OWM_API_KEY}`
            );
            const data = await response.json();
            return data.list;
        },
    });
};
