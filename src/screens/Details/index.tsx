
import React from 'react';
import { View } from 'react-native';
import { useTheme, Text, ActivityIndicator } from 'react-native-paper';

import style from './style';
import type { RootStackScreenProps } from '../../schema/Navigation/types';
import { useCurrentWeather } from '../../api/CurrentWeather';
import { useForecastWeather } from '../../api/ForecastWeather';
import getMinMaxTemp from '../../utils/getMinMaxTemp/indes';

type Props = RootStackScreenProps<'Details'>;

const Details: React.FC<Props> = ({ route }) => {
    const { cityId } = route.params;
    const { isPending: isCurrentDataPending, data: currentData } = useCurrentWeather(cityId);
    const { isPending: isForecastPending, data: forecastData } = useForecastWeather(cityId);
    const { minTemp, maxTemp } = forecastData ? getMinMaxTemp(forecastData.list) : { minTemp: 0, maxTemp: 0 };
    const theme = useTheme();
    return (
        <View style={[style.root, { backgroundColor: theme.colors.surface }]}>
            {isCurrentDataPending || !currentData ? <ActivityIndicator /> :
                (<>
                    <Text variant="titleSmall">{currentData.weather[0].description}</Text>
                    <Text variant="displayLarge">{Math.round(currentData.main.temp)}℃</Text>
                    <Text variant="bodySmall">Min: {minTemp}℃ · Max: {maxTemp}℃</Text>
                    <Text variant="bodySmall">{currentData.main.pressure}hPa</Text>
                </>)}
            {isForecastPending || !forecastData ? <ActivityIndicator /> : <></>}
        </View>
    );
};

export default Details;
