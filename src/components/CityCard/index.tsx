import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Icon, useTheme } from 'react-native-paper';
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


const style = StyleSheet.create({
    root: {
        flex: 1,
        borderRadius: 100,
        margin: 8,
        height: 80,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
    },
    middle: {
        flexDirection: 'column',
        flex: 1,
    },
    leftIcon: {
        width: 40,
        aspectRatio: 1,
        marginRight: 8,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
