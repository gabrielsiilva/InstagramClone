import React from 'react';
import {
  Image,
  FlatList,
  View
} from 'react-native';

import { Icon } from 'react-native-elements';

import mock from '../../utils/mock';

import {
  DirectContainer,
  MessageContainer,
  UserPhoto,
  UserName,
  MessageInfo,
  LastMessageContent,
  DirectAction,
  SearchContainer,
  SearchMessage,
  UserPhotoContainer,
  UserPhotoGradient,
  UserPhotoBorder,
  MessageTime,
  LastMessageContainer
} from './styles';

import record from '../../../assets/record.png';
import camera from '../../../assets/camera.png';
import edit from '../../../assets/edit.png';

export default function DirectPage({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Direct',
    headerRight: () => (
      <View style={{ flexDirection: 'row' }}>
        <DirectAction onPress={() => { }}>
          <Image source={record} style={{ width: 25, height: 25 }} />
        </DirectAction>
        <DirectAction onPress={() => { }}>
          <Image source={edit} style={{ width: 24, height: 24 }} />
        </DirectAction>
      </View>
    )
  });

  return (
    <DirectContainer
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <SearchContainer>
        <Icon name="search" size={20} color='#a9a9a9' />
        <SearchMessage
          clearButtonMode='always'
          inlineImageLeft='search_icon'
          placeholder='Search'
          placeholderTextColor='#a9a9a9'
        />
      </SearchContainer>
      <FlatList
        data={mock.directs}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <MessageContainer>
            <UserPhotoContainer>
              <UserPhotoGradient
                colors={['#f6c159', '#f48e47', '#bc1f91', '#a70f95', '#960cb0']}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
              >

                <UserPhotoBorder>
                  <UserPhoto source={item.authorPhoto} />
                </UserPhotoBorder>

              </UserPhotoGradient>
            </UserPhotoContainer>

            <MessageInfo>
              <UserName>{item.authorName}</UserName>

              <LastMessageContainer>
                <LastMessageContent
                  numberOfLines={1}>
                  {item.lastMessage}
                </LastMessageContent>
                <MessageTime>· {item.messageTime}</MessageTime>
              </LastMessageContainer>
            </MessageInfo>
            <Image source={camera} style={{ height: 26, width: 28, tintColor: '#a9a9a9' }} />
          </MessageContainer>
        )}
      />
    </DirectContainer>
  );
}
