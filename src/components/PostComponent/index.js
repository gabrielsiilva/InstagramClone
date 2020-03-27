import React, { Component } from 'react';
import { Image, Text, Animated } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import DoubleTapComponent from '../DoubleTapComponent';

import {
  PostContainer,
  PostHeader,
  UserInfo,
  PlaceText,
  UserName,
  PostImage,
  PostFooter,
  PostActionsContainer,
  Action,
  PostDetailsContainer,
  PostLikes,
  PostDescriptionContainer,
  PostDescription,
  UserPhoto,
  UserContainer,
  UserNameDescription,
  PostHashtags,
  LeftActions,
  RightAction,
  OverlayView,
} from './styles';

import more from '../../../assets/more.png';
import like from '../../../assets/like.png';
import liked from '../../../assets/liked.png';
import comment from '../../../assets/comment.png';
import share from '../../../assets/direct.png';
import save from '../../../assets/save.png';
import saved from '../../../assets/saved.png';


export default class PostComponent extends Component {

  state = {
    liked: false,
    saved: false,
    fadeAnim: new Animated.Value(0)
  };

  handleLikePost = (id) => {
    Animated.sequence([
      Animated.spring(this.state.fadeAnim, { toValue: 1, useNativeDriver: true }),
      Animated.spring(this.state.fadeAnim, { toValue: 0, useNativeDriver: true }),
    ]).start();

    this.setState({ liked: !this.state.liked });
  };

  handleSavePost = () => {
    this.setState({ saved: !this.state.saved });
  };

  render() {
    const { postDetails } = this.props;

    return (
      <PostContainer>
        <PostHeader>

          <UserContainer>
            <UserPhoto source={postDetails.authorPhoto} />
            <UserInfo>
              <UserName>{postDetails.author}</UserName>
              <PlaceText>{postDetails.place}</PlaceText>
            </UserInfo>
          </UserContainer>

          {/* TODO: Add handle for this action!! */}
          <TouchableOpacity onPress={() => { }}>
            <Image source={more} />
          </TouchableOpacity>

        </PostHeader>

        <DoubleTapComponent onDoubleTap={() => { this.handleLikePost(postDetails._id) }}>
          <PostImage source={postDetails.image} />
          <OverlayView>
            <Animated.Image
              style={{
                tintColor: '#fff',
                opacity: this.state.fadeAnim,
                transform: [
                  {
                    scale: this.state.fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.7, 1.5],
                    }),
                  },
                ],
              }}
              source={liked}
            />
          </OverlayView>
        </DoubleTapComponent>

        <PostFooter>

          <PostActionsContainer>
            <LeftActions>
              <TouchableOpacity onPress={() => { this.handleLikePost(postDetails._id) }}>
                <Action source={this.state.liked ? liked : like} />
              </TouchableOpacity>

              <TouchableOpacity>
                <Action source={comment} />
              </TouchableOpacity>

              <TouchableOpacity>
                <Action source={share} />
              </TouchableOpacity>
            </LeftActions>

            <TouchableWithoutFeedback onPress={() => { this.handleSavePost() }}>
              <RightAction source={this.state.saved ? saved : save} />
            </TouchableWithoutFeedback>
          </PostActionsContainer>

          <PostDetailsContainer>
            <Text>Liked by <PostLikes>user2</PostLikes> and <PostLikes>others</PostLikes></Text>

            <PostDescriptionContainer>
              <UserNameDescription>{postDetails.author}</UserNameDescription>
              <PostDescription>{postDetails.description}</PostDescription>
              <PostHashtags>{`#${postDetails.hashtags}`}</PostHashtags>
            </PostDescriptionContainer>
          </PostDetailsContainer>

        </PostFooter>
      </PostContainer>
    );
  }
}
