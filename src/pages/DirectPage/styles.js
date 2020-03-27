import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';

export const SearchContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    background-color: #e6e6e6;
    margin-top: 10px;
    border-radius: 8px;
    padding: 5px 10px;
    width: 95%;
    align-self: center;
    overflow: hidden;
`;

export const SearchMessage = styled.TextInput`
    padding-left: 3px;
    padding-right: 20px;
`;

export const DirectAction = styled.TouchableOpacity`
    padding: 10px;
`;

export const DirectContainer = styled.ScrollView`
    flex: 1;
    background-color: #fff;
`;

export const UserPhotoContainer = styled.View`
  align-items: center;
`;

export const UserPhotoGradient = styled(LinearGradient)`
  width: 64px;
  height: 64px;
  border-radius: 34.5px;
  justify-content: center;
  align-items: center;
`;

export const UserPhotoBorder = styled.View`
  border-radius: 32.5px;
  width: 60px;
  height: 60px;
  border: 5px solid #fff;
  justify-content: center;
  align-items: center;
`;

export const UserPhoto = styled.Image`
  height: 55px;
  width: 55px;
  border-radius: 50px;
  background-color: #000;
`;

export const MessageContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 8px 0px 4px 18px;
`;

export const MessageInfo = styled.View`
    margin-left: 10px;
    justify-content: center;
    width: 71%;
`;

export const LastMessageContainer = styled.View`
    flex-direction: row;
    width: 75%;
`;

export const LastMessageContent = styled.Text`
    color: #666;
    font-size: 12px;
    font-weight: bold;
`;

export const MessageTime = styled.Text`
    color: #666;
    font-size: 12px;
    padding-left: 5px;
`;

export const UserName = styled.Text`
    color: #000;
    font-weight: 900;
`;
