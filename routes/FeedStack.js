import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import FeedPage from '../src/pages/FeedPage';

import logo from '../assets/logo.png';

export default function FeedStack() {
  return (
    <Navigator
      initialRouteName="Feed"
      mode="modal"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: { textAlign: 'center' },
        headerTintColor: '#000',
        headerTitle: () => <Image style={{ marginHorizontal: 20 }} source={logo} />,
        headerBackTitleVisible: false,
        headerTitleContainerStyle: { 'align-items': 'center' }
      }}
    >
      <Screen name="Feed" component={FeedPage} />
    </Navigator>
  );
}
