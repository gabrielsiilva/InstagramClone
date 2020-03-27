import styled from 'styled-components';
import { StatusBar } from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
  margin-top: ${ StatusBar.currentHeight};
  padding-top: 15px;
`;

export const UserTag = styled.Text`
  align-self: center;
  font-size: 17px;
  font-weight: bold;
`;

export const UserInfoContainer = styled.View`
  flex-direction: row;
  flex: 1;
  width: 100%;
  align-items: flex-start;
  padding: 20px;
`;

export const UserDetailContainer = styled.View`
  width: 45%;
  justify-content: center;
`;

export const UserName = styled.Text`
  font-weight: bold;
`;

export const UserPhoto = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin-bottom: 15px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  flex: 1;
`;

export const BoxInfo = styled.View`
  margin-right: 27px;
  justify-content: center;
  align-items: center;
`;

export const InfoNumber = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const InfoText = styled.Text`
  font-size: 14px;
`;

export const ButtonContainer = styled.View`
  padding: 20px;
`;

export const EditProfileButton = styled.TouchableOpacity`
  border: 0.7px solid #bfbfbf;
  justify-content: center;
  align-items: center;
  height: 28px;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
`;

