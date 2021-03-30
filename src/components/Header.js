import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';

import logo from '../assests/images/logo_ott.png';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Container = styled.View`
  position: absolute;
  top: 10;
  width: 100%;
  height: 75px;
  z-index: 1;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const Icon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 40px;
  width: 50px;
`;

const Header = (props) => {
  return (
    <Container>
      <Icon source={logo} />
      <Ionicon
        name="play-circle-outline"
        color="white"
        size={30}
        onPress={() => console.log('Play Home Screen')}
      />
    </Container>
  );
};
const {height, width} = Dimensions.get('window');
export default Header;
