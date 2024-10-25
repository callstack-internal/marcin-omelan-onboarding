import React from 'react';
import { View } from 'react-native';
import { Card, Text, Icon, useTheme } from 'react-native-paper';
import style from './style';
import mapIconsToCondition from '../../utils/mapIconsToCondition';
import { WeatherInternal } from '../../schema/Weather';

type Props = {
    name: string;
    weather: WeatherInternal;
    temp: number;
    onPress: () => void;
};

const LeftContent = (props: { iconName: string }) => {
    const theme = useTheme();

    return (
        <View style={[style.leftIcon, { backgroundColor: theme.colors.surface }]}>
            <Icon source={props.iconName} size={20} />
        </View>
    );
};

const CenterContent = (props: { cityName: string, weatherDescription: string }) => (
    <View style={style.middle}>
        <Text variant="titleMedium">{props.cityName}</Text>
        <Text variant="titleSmall">{props.weatherDescription}</Text>
    </View>
);

const CityCard: React.FC<Props> = ({ name, weather, temp, onPress }) => {
    return (
        <Card style={style.root} onPress={onPress}>
            <Card.Content style={style.content}>
                <LeftContent iconName={mapIconsToCondition(weather.icon)} />
                <CenterContent cityName={name} weatherDescription={weather.description} />
                <Text variant="titleLarge">{Math.round(temp)}℃</Text>
            </Card.Content>
        </Card>
    );
};

export default CityCard;
