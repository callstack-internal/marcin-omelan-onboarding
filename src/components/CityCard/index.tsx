import React from 'react';
import { View } from 'react-native';
import { Card, Text, Icon, ActivityIndicator } from 'react-native-paper';
import style from './style';
import { useCurrentWeather } from '../../api/CurrentWeather';
import mapIconsToCondition from '../../utils/mapIconsToCondition';

type Props = {
    cityId: number;
    onPress: () => void;
};

const LeftContent = (props: { iconName: string }) => <View style={style.leftIcon}><Icon {...props} source={props.iconName} size={20} /></View>;

const CenterContent = (props: { cityName: string | undefined, weatherDescription: string | undefined }) => (
    <View style={style.middle}>
        <Text variant="titleMedium">{props.cityName}</Text>
        <Text variant="titleSmall">{props.weatherDescription}</Text>
    </View>
);

const CityCard: React.FC<Props> = ({ cityId, onPress }) => {
    const { isPending, data } = useCurrentWeather(cityId);
    return (
        <Card style={style.root} onPress={onPress}>
            {isPending || !data ? <ActivityIndicator /> :
                <Card.Content style={style.content}>
                    <LeftContent iconName={mapIconsToCondition(data.weather[0].icon)} />
                    <CenterContent cityName={data?.name} weatherDescription={data?.weather[0]?.description} />
                    <Text variant="titleLarge">{Math.round(data?.main.temp)}℃</Text>
                </Card.Content>
            }
        </Card>
    );
};

export default CityCard;
