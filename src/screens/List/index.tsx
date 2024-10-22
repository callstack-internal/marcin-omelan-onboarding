
import React from 'react';
import { Text, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import style from './style';

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

  return (
    <View style={style.root}>
      <FlashList
        data={cities}
        renderItem={({ item }) => <Text>{item}</Text>}
        estimatedItemSize={200}
      />
    </View>
  );
};

export default List;
