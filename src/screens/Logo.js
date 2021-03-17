import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
  TouchableHighlight,
  KeyboardAvoidingView,
} from 'react-native';
import Appbar from '../components/Appbar';
//import ImageSlider from '../components/ImageSlider';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {Header, Left, Body, Right, Button, Icon, Title} from 'native-base';

/* import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view'; */
import AntIcon from 'react-native-vector-icons/AntDesign';
/* import FloatLabelTextInput from 'react-native-floating-label-text-input'; */

import styled from 'styled-components/native';

const {height, width} = Dimensions.get('window');

const Container = styled.ScrollView`
  flex: 1;
  background-color: #fefdf7;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 100}px;
`;

const Logo = (props) => {
  const isFocused = useIsFocused();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  //const [arr, setArr] =  React.useState([]);

  /*  const add = () =>{
    console.log('add');
    setArr([input, ...arr]);

  } */

  useEffect(() => {
    console.log('Login UseEffect');
  }, [props, isFocused]);

  const onPressBackHandler = async () => {
    console.log('onPressBackHandler');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.containerMain}>
        <View
          style={{alignItems: 'center', marginHorizontal: 30, marginTop: 51}}>
          <Image
            style={styles.productImg}
            source={require('../assests/images/logo_ott.png')}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.sendButton]}
          onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.buttonContainerL, styles.sendButtonL]}
          onPress={() => props.navigation.navigate('Login')}>
          <Text
            style={{color: '#FFFFFF', fontSize: 12, fontFamily: 'arial-bold'}}>
            LOG IN
          </Text>
        </TouchableHighlight>

        {/* <View style={styles.bottomView}>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={styles.textStyle}>Not yet a member ? Sign up.</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  productImg: {
    width: width * 0.808,
    height: height * 0.19334975369,
    //borderRadius: 27,
  },
  inputStyle: {
    width: '80%',
    //marginBottom: 15,
    //paddingBottom: 15,
    alignSelf: 'center',
    borderColor: '#403D3DC9',
    borderBottomWidth: 1,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '80%',
    borderRadius: 10,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    alignSelf: 'center',
    shadowColor: '#00000041',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 1,
    elevation: 6,
    marginTop: '80%',
  },
  sendButton: {
    backgroundColor: '#FFFFFF',
  },
  buttonContainerL: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '80%',
    borderRadius: 10,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    alignSelf: 'center',
    shadowColor: '#00000041',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 1,
    elevation: 6,
  },
  sendButtonL: {
    backgroundColor: '#040404',
  },
  buttonText: {
    color: '#0D0D0D',
    fontFamily: 'arial-bold',
    fontSize: 12,
  },
  buttonContainerSocial: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '80%',
    borderRadius: 10,
    borderColor: '#3B5998',
    borderWidth: 1,
    alignSelf: 'center',
  },
  buttonContainerSocialG: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: '80%',
    borderRadius: 10,
    borderColor: '#00000041',
    borderWidth: 1,
    alignSelf: 'center',
  },
  sendButtonSocialG: {
    backgroundColor: '#FFFFFF',
  },
  sendButtonSocialF: {
    backgroundColor: '#3B5998',
  },
  buttonTextG: {
    color: '#000000',
    fontFamily: 'arial-bold',
  },
  buttonTextF: {
    color: 'white',
    fontFamily: 'arial-bold',
  },
  button: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    backgroundColor: 'white',
  },
  containerMain: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#040404',
  },
  bottomView: {
    width: '80%',
    height: 50,
    backgroundColor: '#040404',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
    borderTopWidth: 1,
    borderColor: '#FFFFFFE5',
    marginLeft: '10%',
  },
  textStyle: {
    color: '#FFFFFFE5',
    fontSize: 14,
  },
});
export default Logo;
