
import React from 'react';
import { View } from 'react-native';
import { useTheme, Text } from 'react-native-paper';

import style from './style';
import type { RootStackScreenProps } from '../../schema/Navigation/types';

type Props = RootStackScreenProps<'Details'>;

const Details: React.FC<Props> = ({ route }) => {
    const { cityId } = route.params;
    const theme = useTheme();
    return (
        <View style={[style.root, { backgroundColor: theme.colors.surface }]}>
            <Text>`${cityId} details\`</Text>
        </View>
    );
};

export default Details;
