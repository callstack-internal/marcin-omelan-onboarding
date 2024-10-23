
import React from 'react';
import { Text, View } from 'react-native';

import style from './style';
import type { RootStackScreenProps } from '../../schema/Navigation/types';

type Props = RootStackScreenProps<'Details'>;

const Details: React.FC<Props> = ({ route }) => {
    const { cityId } = route.params;
    return (
        <View style={style.root}>
            <Text>`${cityId} details\`</Text>
        </View>
    );
};

export default Details;
