import React from 'react';
import { YellowBox } from 'react-native'
import { StatusBar } from 'react-native';

YellowBox.ignoreWarnings[
  'VirtualizedLists'
]

console.disableYellowBox = true;

import Routes from './routes';


export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </>
  );
}
