// import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Config from 'react-native-config';
import { CurrentWeather } from '../../schema/Weather';
import { apiUrl } from '..';
import assert from '../../utils/assert';

export const useGroupWeather = (cityIds: number[]) => {
    assert(cityIds.length <= 20, 'Cannot request more than 20 locations at once');
    return useQuery<CurrentWeather[]>({
        queryKey: ['groupWeather', cityIds], queryFn: async () => {
            // Limit of locations is 20 on this empty, so we need to split the request later
            const response = await fetch(
                `${apiUrl}/group?id=${cityIds.join(',')}&units=metric&appid=${Config.OWM_API_KEY}`
            );
            const data = await response.json();
            return data.list;
        },
    });
};
