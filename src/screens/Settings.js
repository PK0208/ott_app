import React, {useState, useEffect} from 'react';

import {
  StatusBar,
  Dimensions,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
  FlatList,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/FontAwesome';
import {useIsFocused} from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #0d1f33;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 95) / 100}px;
`;

const {height, width} = Dimensions.get('window');

const AccountOptions = [
  {
    name: 'Change Password        ',
  },
  {
    name: 'Change Phone Number',
  },
];

const OtherOptions = [
  {
    name: 'Privacy policy          ',
  },
  {
    name: 'Teams & Conditions',
  },
];
const Teaser = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log('User effect props MoviesByName', props.route.params);
  }, [props, isFocused]);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              marginLeft: width * 0.40533333333,
              color: '#FFFFFF',
              fontSize: 18,
              fontFamily: 'arial-bold',
            }}>
            Settings
          </Text>

          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Text
              style={{
                marginLeft: width * 0.224,
                color: '#FFFFFF',
                fontSize: 15,
                fontFamily: 'Arial regular',
              }}>
              cancel
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            marginLeft: width * 0.08533333333,
            color: '#FFFFFF',
            fontSize: 16,
            fontFamily: 'arial-bold',
            marginTop: 24,
          }}>
          Account
        </Text>

        <View style={{flexDirection: 'row', marginTop: 14}}>
          <TouchableOpacity
            style={[styles.buttonContainerS, styles.sendButtonS]}
            onPress={() => props.navigation.navigate('ChangePassword')}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'arial-bold',
                marginLeft: width * 0.04533333333,
              }}>
              Change Password
            </Text>
            <AntIcon
              name="right"
              color="#FFFFFF"
              size={20}
              style={{marginLeft: width * 0.44648}}
              onPress={() => console.log('Play')}
            />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity
            style={[styles.buttonContainerS, styles.sendButtonS]}
            onPress={() => props.navigation.navigate('ChangePhoneNumber')}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'arial-bold',
                marginLeft: width * 0.04533333333,
              }}>
              Change Phone Number
            </Text>
            <AntIcon
              name="right"
              color="#FFFFFF"
              size={20}
              style={{marginLeft: width * 0.35314666666}}
              onPress={() => console.log('Play')}
            />
          </TouchableOpacity>
        </View>
        {/* {AccountOptions.map((item) => {
          return (
            <TouchableOpacity
              style={[styles.buttonContainerS, styles.sendButtonS]}>
              <View
                style={{
                  //borderWidth: 1,
                  //borderRadius: 25,
                  //borderColor: '#707070',
                  //backgroundColor: '#FFFFFF',
                  flexDirection: 'row',
                  //width: '80%',
                  //margin: 5,
                  //width: width * 0.5413333333,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    //justifyContent: 'space-between',
                    //width: width * 0.49018666666,
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'arial-bold',
                      marginLeft: width * 0.04533333333,
                      fontSize: 15,
                    }}
                    ellipsizeMode="tail">
                    {item.name}
                  </Text>
                </View>
                <View style={{flexDirection: 'row-reverse'}}>
                  <AntIcon
                    name="right"
                    color="#FFFFFF"
                    size={20}
                    style={{marginLeft: '38%'}}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })} */}

        <Text
          style={{
            marginLeft: width * 0.08533333333,
            color: '#FFFFFF',
            fontSize: 16,
            fontFamily: 'arial-bold',
            marginTop: 11,
          }}>
          Other
        </Text>

        <View style={{flexDirection: 'row', marginTop: 14}}>
          <TouchableOpacity
            style={[styles.buttonContainerS, styles.sendButtonS]}
            onPress={() => props.navigation.navigate('Settings')}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'arial-bold',
                marginLeft: width * 0.04533333333,
              }}>
              Privacy policy
            </Text>
            <AntIcon
              name="right"
              color="#FFFFFF"
              size={20}
              style={{marginLeft: width * 0.52914666666}}
              onPress={() => console.log('Play')}
            />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity
            style={[styles.buttonContainerS, styles.sendButtonS]}
            onPress={() => props.navigation.navigate('Settings')}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'arial-bold',
                marginLeft: width * 0.04533333333,
              }}>
              Teams & Conditions
            </Text>
            <AntIcon
              name="right"
              color="#FFFFFF"
              size={20}
              style={{marginLeft: width * 0.41981333333}}
              onPress={() => console.log('Play')}
            />
          </TouchableOpacity>
        </View>

        {/*  {OtherOptions.map((item) => {
          return (
            <TouchableOpacity
              style={[styles.buttonContainerS, styles.sendButtonS]}>
              <View
                style={{
                  //borderWidth: 1,
                  //borderRadius: 25,
                  //borderColor: '#707070',
                  //backgroundColor: '#FFFFFF',
                  flexDirection: 'row',
                  //width: '80%',
                  //margin: 5,
                  //width: width * 0.5413333333,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    //justifyContent: 'space-between',
                    //width: width * 0.49018666666,
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'arial-bold',
                      marginLeft: width * 0.04533333333,
                      fontSize: 15,
                    }}
                    ellipsizeMode="tail">
                    {item.name}
                  </Text>
                </View>
                <View style={{flexDirection: 'row-reverse'}}>
                  <AntIcon
                    name="right"
                    color="#FFFFFF"
                    size={20}
                    style={{marginLeft: '45%'}}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })} */}

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={[styles.buttonContainerS, styles.sendButtonS]}
            onPress={() => props.navigation.navigate('Settings')}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'arial-bold',
                marginLeft: width * 0.04533333333,
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "orange"
    backgroundColor: '#0D1F33',
  },
  buttonContainerS: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //marginBottom: 20,
    width: width * 0.88,
    borderRadius: 10,
    //borderColor: '#FFFFFF',
    //borderWidth: 1,
    alignSelf: 'center',
    shadowColor: '#00000041',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 1,
    elevation: 6,
    //marginTop: height * 0.34002361275 * 2.2,
    backgroundColor: '#FFFFFF',
    marginLeft: width * 0.06133333333,
    //padding: 5,
    margin: 10,
  },
  sendButtonS: {
    backgroundColor: '#555555',
  },
});

export default Teaser;
