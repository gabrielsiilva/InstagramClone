import React from 'react';

import {
  Container,
  HeaderContainer,
  HeaderText,
  ScrollContainer,
  RequestsText,
  ActivitiesBox,
  TimeActivityText,
  ActivityBox,
  UserPhotoContainer,
  UserPhotoGradient,
  UserPhotoBorder,
  UserPhoto,
  ActivityText,
  BolderText,
  ActivityTime,
  ActivityTextContainer,
  PhotoLiked
} from './styles';

import mock from '../../utils/mock';
import { FlatList } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

export default function ActivityPage({ navigation }) {
  return (
    <Container>
      <HeaderContainer>
        <HeaderText>Activity</HeaderText>
      </HeaderContainer>

      <ScrollContainer
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <RequestsText>Follow Requests</RequestsText>

        <ActivitiesBox>
          <TimeActivityText>This Week</TimeActivityText>

          <FlatList
            keyExtractor={activity => activity._id}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={mock.activities.week}
            renderItem={({ item }) => (

              <ActivityBox>
                <UserPhotoContainer>
                  <UserPhotoGradient
                    colors={['#f6c159', '#f48e47', '#bc1f91', '#a70f95', '#960cb0']}
                    start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                  >

                    <UserPhotoBorder>
                      <UserPhoto source={item.userPhoto} />
                    </UserPhotoBorder>

                  </UserPhotoGradient>
                </UserPhotoContainer>

                <ActivityTextContainer>
                  <ActivityText numberOfLines={1}> <BolderText>{item.userName}</ BolderText> liked your post.</ActivityText>
                  <ActivityTime> {item.acitivityTime}</ActivityTime>
                </ActivityTextContainer>
                <PhotoLiked source={item.picture} />
              </ActivityBox>

            )}
          />
        </ActivitiesBox>

        <ActivitiesBox>
          <TimeActivityText>This Month</TimeActivityText>

          <FlatList
            keyExtractor={activity => activity._id}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={mock.activities.month}
            renderItem={({ item }) => (

              <ActivityBox>
                <UserPhotoContainer>
                  <UserPhotoGradient
                    colors={['#f6c159', '#f48e47', '#bc1f91', '#a70f95', '#960cb0']}
                    start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                  >

                    <UserPhotoBorder>
                      <UserPhoto source={item.userPhoto} />
                    </UserPhotoBorder>

                  </UserPhotoGradient>
                </UserPhotoContainer>

                <ActivityTextContainer>
                  <ActivityText numberOfLines={1}> <BolderText>{item.userName}</ BolderText> liked your post.</ActivityText>
                  <ActivityTime> {item.acitivityTime}</ActivityTime>
                </ActivityTextContainer>
                <PhotoLiked source={item.picture} />
              </ActivityBox>

            )}
          />
        </ActivitiesBox>
      </ScrollContainer>

    </Container>
  );
}
