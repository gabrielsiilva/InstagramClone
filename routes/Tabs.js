import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedStack from './FeedStack';

import home from '../assets/feed-selected.png';
import homeSelected from '../assets/home.png';

import searchSelected from '../assets/search-selected.png';
import search from '../assets/search.png';

import add from '../assets/new.png';

import likesSelected from '../assets/likes-selected.png';
import likes from '../assets/like.png';

import profileSelected from '../assets/profile-selected.png';
import profile from '../assets/profile.png';

import ActivityPage from '../src/pages/ActivityPage';
import ProfilePage from '../src/pages/ProfilePage';

import { Image } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Navigator tabBarOptions={{ showLabel: false }}>
      <Screen
        name="Feed"
        component={FeedStack}
        options={{
          tabBarIcon: ({ focused }) => (
            focused
              ? <Image style={{ width: 25, height: 25 }} source={homeSelected} />
              : <Image style={{ width: 25, height: 25 }} source={home} />
          )
        }}
      />

      <Screen
        name="Explorer"
        component={() => null}
        options={{
          tabBarIcon: ({ focused }) => (
            focused
              ? <Image style={{ width: 25, height: 25 }} source={searchSelected} />
              : <Image style={{ width: 25, height: 25 }} source={search} />
          )
        }}
      />

      <Screen
        name="AddPhoto"
        component={() => null}
        options={{
          tabBarIcon: () => (
            <Image style={{ width: 25, height: 25 }} source={add} />
          )
        }}
      />

      <Screen
        name="Activity"
        component={ActivityPage}
        options={{
          tabBarIcon: ({ focused }) => (
            focused
              ? <Image style={{ width: 25, height: 25 }} source={likesSelected} />
              : <Image style={{ width: 25, height: 25 }} source={likes} />
          )
        }}
      />

      <Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ({ focused }) => (
            focused
              ? <Image style={{ width: 25, height: 25 }} source={profileSelected} />
              : <Image style={{ width: 25, height: 25 }} source={profile} />
          )
        }}
      />
    </Navigator>
  );
}
