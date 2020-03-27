import React from 'react';

import {
  Container,
  GridImage,
  TabContainer,
  TabIcon,
  TabItem
} from './styles';


import { FlatList } from 'react-native-gesture-handler';
import { View } from 'react-native';

import mock from '../../utils/mock';

import gridIcon from '../../../assets/grid.png';
import tagIcon from '../../../assets/tags.png';

export default function GridComponent() {
  return (
    <Container>
      <TabContainer>
        <TabItem active>
          <TabIcon source={gridIcon} />
        </TabItem>
        <TabItem >
          <TabIcon source={tagIcon} style={{ height: 27, width: 27 }} />
        </TabItem>
      </TabContainer>
      <FlatList
        keyExtractor={(_, index) => index}
        numColumns={3} data={mock.profilePosts}
        renderItem={({ item }) => (
          <View>
            <GridImage source={item.photo} />
          </View>
        )} />
    </Container>
  );
}
