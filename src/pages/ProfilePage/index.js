import React from 'react';
import GridComponent from '../../components/GridComponent';

import {
  Container,
  UserTag,
  UserInfoContainer,
  UserDetailContainer,
  UserPhoto,
  UserName,
  InfoText,
  BoxInfo,
  InfoNumber,
  InfoContainer,
  EditProfileButton,
  ButtonText,
  ButtonContainer
} from './styles';

import userPhoto from '../../../assets/gabriel.jpeg';
import { Text } from 'react-native';

export default function ProfilePage() {

  return (
    <Container
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <UserTag>gabrielsiilva</UserTag>
      <UserInfoContainer>
        <UserDetailContainer>
          <UserPhoto source={userPhoto} />
          <UserName>Gabriel Silva</UserName>
          <Text>SI - unifacisa 💻</Text>
          <Text>FrontEnd Developer 🚀</Text>
          <Text>Brazil 🟢🟡</Text>
          <Text>Paraíba 💙</Text>
          <Text>LinkedIn: /gabrielsiilva</Text>
        </UserDetailContainer>
        <InfoContainer>
          <BoxInfo>
            <InfoNumber>12</InfoNumber>
            <InfoText>Posts</InfoText>
          </BoxInfo>
          <BoxInfo>
            <InfoNumber>2M</InfoNumber>
            <InfoText>Followers</InfoText>
          </BoxInfo>
          <BoxInfo>
            <InfoNumber>42</InfoNumber>
            <InfoText>Following</InfoText>
          </BoxInfo>
        </InfoContainer>

      </UserInfoContainer>

      <ButtonContainer>
        <EditProfileButton>
          <ButtonText>Edit Profile</ButtonText>
        </EditProfileButton>
      </ButtonContainer>

      <GridComponent />
    </Container>
  );
}
