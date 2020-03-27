import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';

export const StorieListContainer = styled.View`
  height: 110px;
  width: 100%;
  background-color: #FFF;
  border-bottom-width: 1px;
  border-bottom-color: #dfdfdf;
  flex-direction: row;
  align-items: center;
`;

export const StorieContainer = styled.View`
  margin: 5px 0px 0px 16px;
  align-items: center;
`;

export const StorieGradient = styled(LinearGradient)`
  width: 67px;
  height: 67px;
  border-radius: 34.5px;
  justify-content: center;
  align-items: center;
`;

export const StorieBorder = styled.View`
  border-radius: 32.5px;
  width: 63px;
  height: 63px;
  border: 5px solid #fff;
  justify-content: center;
  align-items: center;
`;

export const StorieImage = styled.Image`
  height: 58px;
  width: 58px;
  border-radius: 30px;
  background-color: #000;
`;

export const StorieAuthor = styled.Text`
  margin: 2px 0px;
  font-size: 11px;
  color: #666;
`;