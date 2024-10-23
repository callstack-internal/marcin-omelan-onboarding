
import React from 'react';
import { View } from 'react-native';
import { useTheme, Text, ActivityIndicator } from 'react-native-paper';

import style from './style';
import type { RootStackScreenProps } from '../../schema/Navigation/types';
import { useCurrentWeather } from '../../api/CurrentWeather';

type Props = RootStackScreenProps<'Details'>;

const Details: React.FC<Props> = ({ route }) => {
    const { cityId } = route.params;
    const { isPending, data: currentData } = useCurrentWeather(cityId);
    const theme = useTheme();
    return (
        <View style={[style.root, { backgroundColor: theme.colors.surface }]}>
            {isPending || !currentData ? <ActivityIndicator /> :
                (<>
                    <Text variant="titleSmall">{currentData.weather[0].description}</Text>
                    <Text variant="displayLarge">{Math.round(currentData.main.temp)}℃</Text>
                    <Text variant="bodySmall">{currentData.main.pressure}hPa</Text>
                </>)}
        </View>
    );
};

export default Details;
