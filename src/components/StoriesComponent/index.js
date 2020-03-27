import React, { Component } from 'react';
import { FlatList } from 'react-native';

import {
  StorieListContainer,
  StorieContainer,
  StorieBorder,
  StorieImage,
  StorieGradient,
  StorieAuthor
} from './styles';

import mock from '../../utils/mock';

export default class StoriesComponent extends Component {
  state = { stories: [] };

  componentDidMount() {
    this.setState({ stories: mock.stories });
  }

  render() {
    return (
      <StorieListContainer>
        <FlatList
          keyExtractor={storie => storie._id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={this.state.stories}
          renderItem={({ item }) => (

            <StorieContainer>

              <StorieGradient
                colors={['#f6c159', '#f48e47', '#bc1f91', '#a70f95', '#960cb0']}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
              >

                <StorieBorder>
                  <StorieImage source={item.authorPhoto} />
                </StorieBorder>

              </StorieGradient>

              <StorieAuthor
                numberOfLines={1}>
                {item.authorName}
              </StorieAuthor>
            </StorieContainer>

          )} />
      </StorieListContainer>
    );
  }
}
