
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useTheme, ActivityIndicator } from 'react-native-paper';


import CityCard from '@components/CityCard';
import { useGroupWeather } from '@api/GroupWeather';
import type { RootStackScreenProps } from '@schema/Navigation/types';
import NativeLocation from '@specs/NativeLocation';
import useLocationPermission from '@utils/useLocationPermission';
import { useCurrentWeatherForLocation } from '@api/CurrentWeather';

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
  const theme = useTheme();
  const { getPermission, askPermission } = useLocationPermission();
  const [location, setLocation] = React.useState<{ longitude: number, latitude: number } | undefined>(undefined);
  const { isLoading: dataForCurrentLocationIsLoading, data: dataForCurrentLocation } = useCurrentWeatherForLocation(location);
  const { isPending, data } = useGroupWeather(cities);

  React.useEffect(() => {
    const requestPermission = async () => {
      const alreadyGranted = await getPermission();
      const granted = alreadyGranted || await askPermission();
      if (granted) {
        const _location = await NativeLocation?.getLocation();
        setLocation(_location);
      }
    };
    requestPermission();
    // run only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentLocationHeader = (() => {
    if (dataForCurrentLocation) {
      return <CityCard name={`📍${dataForCurrentLocation.name}`}
        weather={dataForCurrentLocation.weather[0]}
        temp={dataForCurrentLocation.main.temp}
        onPress={() => {
          navigation.navigate('Details', {
            cityId: dataForCurrentLocation.id,
          });
        }} />;
    }
    if (dataForCurrentLocationIsLoading) {
      return <ActivityIndicator />;
    }
    return null;
  })();

  return (
    <View style={[style.root, { backgroundColor: theme.colors.surface }]}>
      {isPending ? <ActivityIndicator /> :
        <FlashList
          data={data}
          ListHeaderComponent={currentLocationHeader}
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

const style = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
