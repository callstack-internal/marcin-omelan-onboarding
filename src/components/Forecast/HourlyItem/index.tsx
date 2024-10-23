import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Icon } from 'react-native-paper';
import mapIconsToCondition from '../../../utils/mapIconsToCondition';
import { ForecastWeatherInternal } from '../../../schema/Weather';

type Props = {
    weatherData: ForecastWeatherInternal;
}

const HourlyItem: React.FC<Props> = ({ weatherData }) => {
    const date = new Date(weatherData.dt * 1000);
    return (
        <View style={style.root}>
            <Text variant="bodySmall">{Math.round(weatherData.main.temp)}℃</Text>
            <Icon source={mapIconsToCondition(weatherData.weather[0].icon)} size={20} />
            <Text variant="bodySmall">{date.getHours()}:00</Text>
        </View>
    );
};


const style = StyleSheet.create({
    root: {
        flex: 1,
        gap: 5,
        alignItems: 'center',
        height: '100%',
        width: 45,
        marginHorizontal: 5,
    },
});

export default HourlyItem;
