
import React from 'react';
import { View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useTheme, ActivityIndicator } from 'react-native-paper';


import CityCard from '../../components/CityCard';
import { useGroupWeather } from '../../api/GroupWeather';
import type { RootStackScreenProps } from '../../schema/Navigation/types';
import NativeLocation from '../../specs/NativeLocation';

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

type Props = RootStackScreenProps<'List'>;

const List: React.FC<Props> = ({ navigation }) => {
  const { isPending, data } = useGroupWeather(cities);
  const [_hasPermission, setHasPermission] = React.useState(false);
  React.useEffect(() => {
    NativeLocation.getPermission().then((permission) => {
      setHasPermission(permission);
      if (!permission) {
        NativeLocation.askPermission();
      }
    });
  }, []);
  const theme = useTheme();
  return (
    <View style={[style.root, { backgroundColor: theme.colors.surface }]}>
      {isPending ? <ActivityIndicator /> :
        <FlashList
          data={data}
          renderItem={({ item }) => <CityCard name={item.name} weather={item.weather[0]} temp={item.main.temp} onPress={() => {
            navigation.navigate('Details', {
              cityId: item.id,
            });
          }} />}
          estimatedItemSize={80}
        />
      }
    </View>
  );
};

export default List;
