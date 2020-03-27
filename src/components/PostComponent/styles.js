import styled from 'styled-components/native';

export const PostContainer = styled.View`
  background-color: #FFF;
`;

export const PostHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;


export const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserInfo = styled.View`
  padding: 10px;
`;

export const UserPhoto = styled.Image`
  background-color: #000;
  width: 35px;
  height: 35px;
  border-radius: 17.2px;
`;

export const UserName = styled.Text`
  font-size: 14px;
  color: #000;
  font-weight: 900;
  margin-bottom: 2px;
`;

export const PlaceText = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const PostImage = styled.Image`
  width: 100%;
  height: 460px;
`;

export const OverlayView = styled.View`
    position: absolute;
    align-items: center;
    justify-content: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;

export const PostFooter = styled.View`
  padding: 20px;
`;

export const PostActionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Action = styled.Image`
  margin-right: 15px;
  width: 25px;
  height: 25px;
`;

export const RightAction = styled.Image`
  width: 25px;
  height: 25px;
`;

export const LeftActions = styled.View`
  flex-direction: row;
`;

export const PostDetailsContainer = styled.View`
  margin-top: 10px;
`;

export const PostLikes = styled.Text`
  font-size: 14px;
  color: #000;
  font-weight: 600; 
`;

export const PostDescriptionContainer = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
`;
export const PostDescription = styled.Text`
  padding: 5px;
`;

export const UserNameDescription = styled(UserName)`
  margin-bottom: 0px;
`;

export const PostHashtags = styled.Text`
  margin-left: 3px;
  font-size: 14px;
  color: #003569;
`;

