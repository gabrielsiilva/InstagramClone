import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import DirectPage from '../src/pages/DirectPage';
import StoriesPage from '../src/pages/StoriesPage';

const { Navigator, Screen } = createStackNavigator();
import Tabs from './Tabs';

export default function Routes() {
  return (

    <NavigationContainer>
      <Navigator
        mode="modal"
        screenOptions={{
          headerBackTitle: null,
          headerBackTitleVisible: false
        }}
      >
        <Screen
          options={{
            headerShown: false
          }}
          name="Home"
          component={Tabs}
        />

        <Screen
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: { textAlign: 'center' },
          }}
          name="Direct"
          component={DirectPage}
        />

        <Screen
          options={{ headerShown: false }}
          name="Stories"
          component={StoriesPage}
        />
      </Navigator>
    </NavigationContainer>
  );
}
