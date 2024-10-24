import React from 'react';
import { ForecastWeatherInternal } from '../../schema/Weather';
import { ScrollView, StyleSheet, View } from 'react-native';

import HourlyItem from './HourlyItem';

type Props = {
    forecastData: ForecastWeatherInternal[];
}

const Forecast: React.FC<Props> = ({ forecastData }) => {
    return (
        <View style={style.wrapper}>
            <ScrollView horizontal={true} contentContainerStyle={style.content} testID="forecast_scrollView">
                {forecastData.map((data) => <HourlyItem key={data.dt} weatherData={data} />)}
            </ScrollView>
        </View>
    );
};


const style = StyleSheet.create({
    wrapper: {
        height: 100,
    },
    content: {
        padding: 18,
    },
});


export default Forecast;
