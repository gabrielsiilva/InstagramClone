import styled from 'styled-components';
import { Dimensions } from 'react-native';

let { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
`;

export const TabContainer = styled.View`
  border-top-width: 0.5px;
  border-top-color: #bfbfbf;
  height: 45px;
  flex-direction: row;
`;

export const TabItem = styled.View`
  height: 44px;
  border-bottom-color: ${props => props.active ? '#000' : '#fff'};
  border-bottom-width: 1px;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

export const TabIcon = styled.Image`
  height: 23px;
  width: 23px;
`;

export const GridImage = styled.Image`
  border-color: #fff;
  border-width: 1px;
  width: ${width / 3};
  height: ${width / 3};
`;