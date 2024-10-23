import React from 'react';
import { Card, Icon } from 'react-native-paper';

import style from './style';

type Props = {
    cityId: number;
    onPress: () => void;
};

const RightContent = (props: { size: number }) => <Icon {...props} source="chevron-right" size={20} />;
const LeftContent = (props: { size: number }) => <Icon {...props} source="weather-sunny" size={20} />;

const CityCard: React.FC<Props> = ({ cityId, onPress }) => {
    return (
        <Card style={style.root} onPress={onPress}>
            <Card.Title title={cityId} right={RightContent} left={LeftContent} />
        </Card>
    );
};

export default CityCard;
