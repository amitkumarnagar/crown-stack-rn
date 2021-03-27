import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SongsScreen, SongDetailsScreen } from '../screens';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: 'white' }
      }}
    >
      <Stack.Navigator>
        <Stack.Screen name="Songs" component={SongsScreen} />
        <Stack.Screen name="SongDetails" component={SongDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
