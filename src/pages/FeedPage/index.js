import React, { useState, useEffect } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';

import camera from '../../../assets/camera.png';
import direct from '../../../assets/direct.png';
import mock from '../../utils/mock';

import { PostComponent, StoriesComponent } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';


export default function FeedPage({ navigation }) {
  navigation.setOptions({
    headerLeft: () => (
      <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => navigation.navigate('Stories')}>
        <Image source={camera} />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity style={{ marginRight: 15 }} onPress={() => navigation.navigate('Direct')}>
        <Image source={direct} style={{ width: 25, height: 25 }} />
      </TouchableOpacity>
    )
  });

  const [feed, setFeed] = useState([]);

  useEffect(() => {
    setFeed(mock.posts);
  }, []);

  return (
    <ScrollView
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <StoriesComponent />
      <View style={{ flex: 1 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={feed}
          keyExtractor={post => post._id}
          renderItem={({ item }) => (
            <PostComponent postDetails={item}></PostComponent>
          )} />
      </View>
    </ScrollView>
  );
}