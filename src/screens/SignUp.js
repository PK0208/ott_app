import React, {useState, useEffect} from 'react';
import {
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
} from 'react-native';
import Appbar from '../components/Appbar';
//import ImageSlider from '../components/ImageSlider';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {Card, CardItem, Body} from 'native-base';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import Icon from 'react-native-vector-icons/AntDesign';
import ImageSliderComponent from '../components/ImageSlider';

const {height, width} = Dimensions.get('window');

const SignUp = (props) => {
  const isFocused = useIsFocused();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  useEffect(() => {}, [props, isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <View style={{alignItems: 'center', marginHorizontal: 30}}>
          <Image
            style={styles.productImg}
            source={require('../assests/images/nairobi.jpg')}
          />
        </View>

        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 22,
            fontFamily: 'arial-bold',
            marginTop: height * 0.06773399014,
            textAlign: 'center',
          }}>
          Sign up
        </Text>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 17,
            fontFamily: 'arial-bold',
            marginLeft: 68,
            marginTop: height * 0.03571428571,
          }}>
          Create an account
        </Text>
        <View
          style={{
            marginTop: height * 0.01477832512,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            //alignSelf: 'center',
          }}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="User Name"
              underlineColorAndroid="transparent"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Email Id"
              underlineColorAndroid="transparent"
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Phone Number"
              underlineColorAndroid="transparent"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Create Password"
              underlineColorAndroid="transparent"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.sendButton]}
          onPress={() => console.log('Sign Up Pressed')}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1F33',
  },
  container1: {
    flex: 1,
    marginTop: 40,
  },
  cardStyle: {
    backgroundColor: '#0D1F33',
    //padding: 10,
    //marginLeft: 0,
    //marginRight: 0,
    //marginTop: 0,
  },
  productImg: {
    width: width * 0.808,
    height: height * 0.19334975369,
    borderRadius: 27,
  },
  inputContainer: {
    //marginTop: height * 0.14778325123,
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: width * 0.77333333333,
    height: 45,
    marginBottom: 5,
    flexDirection: 'column',
    //alignItems: 'center',
    //justifyContent: 'center',
    //alignSelf: 'center',
    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  buttonContainer: {
    marginTop: height * 0.0381773399,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 100,
    borderRadius: 30,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    alignSelf: 'center',
  },
  sendButton: {
    backgroundColor: '#0D1F33',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'arial-bold',
    //marginHorizontal: 5,
  },
});
export default SignUp;