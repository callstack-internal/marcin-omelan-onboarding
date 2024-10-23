import React from 'react';

import { useColorScheme } from 'react-native';
import { PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import ListSceen from './src/screens/List';
import DetailsScreen from './src/screens/Details';
import type { RootStackParamList } from './src/schema/Navigation/types';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : LightTheme}>
          <Stack.Navigator initialRouteName="List">
            <Stack.Screen name="List" component={ListSceen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider >
  );
}


export default App;
