
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, Text, ActivityIndicator } from 'react-native-paper';

import type { RootStackScreenProps } from '../../schema/Navigation/types';
import { useCurrentWeather } from '../../api/CurrentWeather';
import { useForecastWeather } from '../../api/ForecastWeather';
import getMinMaxTemp from '../../utils/getMinMaxTemp';
import getWeatherForToday from '../../utils/getWeatherForToday';
import Forecast from '../../components/Forecast';

type Props = RootStackScreenProps<'Details'>;

const Details: React.FC<Props> = ({ route }) => {
    const { cityId } = route.params;
    const { isPending: isCurrentDataPending, data: currentData } = useCurrentWeather(cityId);
    const { isPending: isForecastPending, data: forecastData } = useForecastWeather(cityId);
    const { minTemp, maxTemp } = getMinMaxTemp(getWeatherForToday(forecastData?.list)) ?? { minTemp: 0, maxTemp: 0 };
    const theme = useTheme();
    return (
        <View style={[style.root, { backgroundColor: theme.colors.surface }]}>
            {isCurrentDataPending || !currentData ? <ActivityIndicator /> :
                (<View style={style.topData}>
                    <Text variant="displayLarge">{currentData.name}</Text>
                    <Text variant="titleSmall">{currentData.weather[0].description}</Text>
                    <Text variant="displayLarge">{Math.round(currentData.main.temp)}℃</Text>
                    <Text variant="bodySmall">Min: {minTemp}℃ · Max: {maxTemp}℃</Text>
                </View>)}
            {isForecastPending || !forecastData ? <ActivityIndicator /> : <Forecast forecastData={forecastData.list} />}
            {isCurrentDataPending || !currentData ? <ActivityIndicator /> :
                (<View>
                    <Text variant="bodyMedium">Pressure: {currentData.main.pressure}hPa</Text>
                    <Text variant="bodyMedium">Wind speed: {currentData.wind?.speed}kph</Text>
                    <Text variant="bodyMedium">Cloud Cover: {currentData.clouds?.all}%</Text>
                    <Text variant="bodyMedium">Humidity: {currentData.main.humidity}%</Text>
                </View>)
            }
        </View>
    );
};

const style = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    topData: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default Details;
