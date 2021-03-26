import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';

import logo from '../assests/images/logo_ott.png';

const Container = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 75px;
  z-index: 1;
  flex-flow: row;
  align-items: center;
  justify-content: space-evenly;
`;

const Icon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 30px;
  width: 30px;
`;

const Header = (props) => {
  return (
    <Container>
      <Icon source={logo} />
    </Container>
  );
};
const {height, width} = Dimensions.get('window');
export default Header;
