
import React from 'react';
import { View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import CityCard from '../../components/CityCard';

import style from './style';
import { useGroupWeather } from '../../api/GroupWeather';
import { ActivityIndicator } from 'react-native-paper';

const cities = [
  703448, // Kyiv, UA
  692194, // Sumy, UA
  756135, // Warsaw, PL
  3081368, // Wrocław, PL
  3067696, // Prague, CZ
  3077916, // České Budějovice, CZ
  2950159, // Berlin, DE
  2867714, // Munich, DE
  3247449, // Aachen, DE
  5815135, // Washington, US
  5128581, // New York City, US
];

type Props = {};

const List: React.FC<Props> = () => {
  const { isPending, data } = useGroupWeather(cities);

  return (
    <View style={style.root}>
      {isPending ? <ActivityIndicator /> :
        <FlashList
          data={data}
          renderItem={({ item }) => <CityCard name={item.name} weather={item.weather[0]} temp={item.main.temp} onPress={() => {
            //TODO: navigate to Details screen
          }} />}
          estimatedItemSize={80}
        />
      }
    </View>
  );
};

export default List;
