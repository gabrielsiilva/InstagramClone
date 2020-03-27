import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'react-native';

export const Container = styled.View`
  flex: 1;
  margin-top: ${ StatusBar.currentHeight };
`;

export const HeaderContainer = styled.View`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-bottom-color: #bfbfbf;
  border-bottom-width: 0.6px;
`;

export const HeaderText = styled.Text`
  font-size: 17px;
  font-weight: 900;
`;

export const ScrollContainer = styled.ScrollView``;

export const RequestsText = styled.Text`
  padding: 14px 20px;
  font-size: 15px;
`;

export const ActivitiesBox = styled.View`
  border-top-color: #d9d9d9;
  border-top-width: 0.6px;
  padding: 10px 20px 5px 20px;
`;

export const TimeActivityText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 20px;
`;

export const ActivityBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 7px;
`;

export const UserPhotoContainer = styled.View`
  align-items: center;
  margin-right: 8px;
`;

export const UserPhotoGradient = styled(LinearGradient)`
  width: 59px;
  height: 59px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const UserPhotoBorder = styled.View`
  border-radius: 32.5px;
  width: 55px;
  height: 55px;
  border: 5px solid #fff;
  justify-content: center;
  align-items: center;
`;

export const UserPhoto = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: #000;
`;

export const ActivityText = styled.Text`
  font-size: 13px;
`;

export const BolderText = styled(ActivityText)`
  font-weight: bold;
`;

export const ActivityTime = styled.Text`
  color: #666;
  font-size: 12px;
  padding-left: 5px;
`;

export const ActivityTextContainer = styled.View`
  flex-direction: row;
  width: 70%;
  align-items: center;
`;

export const PhotoLiked = styled.Image`
  height: 50px;
  width: 50px;
`;
