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
} from 'react-native';
import Appbar from '../components/Appbar';
//import ImageSlider from '../components/ImageSlider';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {Card, CardItem, Body} from 'native-base';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import Icon from 'react-native-vector-icons/AntDesign';
import ImageSliderComponent from '../components/ImageSlider';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

const Profile = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {}, [props, isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
        <Text
          style={{color: '#FFFFFF', fontSize: 18, fontFamily: 'arial-bold'}}>
          My Profile
        </Text>
      </View>
      <View style={styles.container1}>
        <View style={{alignItems: 'center', marginHorizontal: 30}}>
          <Image
            style={styles.productImg}
            source={require('../assests/images/nairobi.jpg')}
          />
          <Text style={styles.name}>John Williams</Text>
          <Text style={styles.email}>JohnWilliams@Williams.com</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: 27,
          }}>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.sendButton]}
            onPress={() => props.navigation.navigate('EditProfile')}>
            <Text
              style={{color: '#000000', fontFamily: 'arial-bold', fontSize: 9}}>
              EDIT PROFILE
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonContainerS, styles.sendButtonS]}
            onPress={() => props.navigation.navigate('Settings')}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'arial-bold',
                fontSize: 10,
              }}>
              SETTINGS
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: '#FFFFFF',
            marginLeft: 30,
            marginRight: 30,
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30.5,
          }}>
          <View></View>

          <LinearGradient
            colors={['#8FE384', '#487242']}
            style={{
              width: width * 0.28533333333,
              flexDirection: 'column',
              borderRadius: 10,
              backgroundColor: '#EB6F80',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 23}}>₹99</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#FFFFFF',
                width: '80%',
              }}></View>
            <Text style={{color: 'white', marginTop: 10, fontSize: 11}}>
              BASIC
            </Text>
            <View>
              <Text style={{marginTop: 7, color: 'white', fontSize: 6}}>
                X Time limite
              </Text>
              <Text style={{marginTop: 4, color: 'white', fontSize: 6}}>
                X Number of screen
              </Text>
              <Text style={{marginTop: 4, color: 'white', fontSize: 6}}>
                X Number of ………..
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.buttonContainerBasic, styles.sendButtonBasic]}
              onPress={() => console.log('Buy')}>
              <Text
                style={{
                  color: '#619A59',
                  fontFamily: 'arial-bold',
                  fontSize: 10,
                }}>
                BUY
              </Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={['#9B38D2', '#39154D']}
            style={{
              width: width * 0.28533333333,
              flexDirection: 'column',
              borderRadius: 10,
              backgroundColor: '#EB6F80',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 23}}>₹199</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#FFFFFF',
                width: '80%',
              }}></View>
            <Text style={{marginTop: 10, color: 'white', fontSize: 11}}>
              PREMIUM
            </Text>
            <View>
              <Text style={{marginTop: 7, color: 'white', fontSize: 6}}>
                X Time limite
              </Text>
              <Text style={{marginTop: 4, color: 'white', fontSize: 6}}>
                X Number of screen
              </Text>
              <Text style={{marginTop: 4, color: 'white', fontSize: 6}}>
                X Number of ………..
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.buttonContainerBasic, styles.sendButtonBasic]}
              onPress={() => console.log('Buy')}>
              <Text
                style={{
                  color: '#619A59',
                  fontFamily: 'arial-bold',
                  fontSize: 10,
                }}>
                BUY
              </Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={['#EB6F80', '#763840']}
            style={{
              width: width * 0.28533333333,
              flexDirection: 'column',
              borderRadius: 10,
              backgroundColor: '#EB6F80',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 23}}>₹299</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#FFFFFF',
                width: '80%',
              }}></View>
            <Text style={{marginTop: 10, color: 'white', fontSize: 11}}>
              ULTMATE
            </Text>
            <View>
              <Text style={{marginTop: 7, color: 'white', fontSize: 6}}>
                X Time limite
              </Text>
              <Text style={{marginTop: 4, color: 'white', fontSize: 6}}>
                X Number of screen
              </Text>
              <Text style={{marginTop: 4, color: 'white', fontSize: 6}}>
                X Number of ………..
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.buttonContainerBasic, styles.sendButtonBasic]}
              onPress={() => console.log('Buy')}>
              <Text
                style={{
                  color: '#619A59',
                  fontFamily: 'arial-bold',
                  fontSize: 10,
                }}>
                BUY
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignSelf: 'center',
          margin: 5,
        }}>
        <Text style={styles.bottomText}>About us</Text>
        <View
          style={{borderWidth: 1, borderColor: '#707070', margin: 5}}></View>
        <Text style={styles.bottomText}>T & C</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1F33',
  },
  cardStyle: {
    backgroundColor: '#0D1F33',
    //padding: 10,
    //marginLeft: 0,
    //marginRight: 0,
    //marginTop: 0,
  },
  container1: {
    flex: 1,
    marginTop: 50,
  },
  productImg: {
    width: 117,
    height: 117,
    borderRadius: 117 / 2,
    borderWidth: 2,
    borderColor: 'white',
  },
  name: {
    fontSize: 19,
    color: '#FFFFFF',
    //fontWeight: 'bold',
    fontFamily: 'arial-bold',
    //marginHorizontal: 10,
    //marginVertical: 10,
    marginTop: 15,
  },
  rightText: {
    fontSize: 18,
    margin: 5,
    fontFamily: 'HelveticaNeue Regular',
    color: '#EBE8E8',
    //fontWeight: '700',
  },
  leftText: {
    fontSize: 18,
    margin: 5,
    fontFamily: 'HelveticaNeue Regular',
    color: '#EBE8E8',
    //fontWeight: '700',
  },
  bottomText: {
    fontSize: 14,
    fontFamily: 'Arial regular',
    color: '#B9B8B8',
  },
  email: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: 'Arial regular',
    marginTop: 7,
  },
  buttonContainer: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: width * 0.30058666666,
    borderRadius: 5,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    alignSelf: 'center',
    shadowColor: '#00000041',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 1,
    elevation: 6,
    //marginTop: height * 0.34002361275 * 2.2,
    backgroundColor: '#FFFFFF',
  },
  sendButton: {
    backgroundColor: '#FFFFFF',
  },
  buttonContainerS: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: width * 0.30058666666,
    borderRadius: 5,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    alignSelf: 'center',
    shadowColor: '#00000041',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 1,
    elevation: 6,
    //marginTop: height * 0.34002361275 * 2.2,
    backgroundColor: '#FFFFFF',
  },
  sendButtonS: {
    backgroundColor: '#040404',
  },

  buttonContainerBasic: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: width * 0.192,
    borderRadius: 15,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    alignSelf: 'center',
    shadowColor: '#00000041',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 1,
    elevation: 6,
    marginTop: 13,
    backgroundColor: '#FFFFFF',
  },
  sendButtonBasic: {
    backgroundColor: '#FFFFFF',
  },
});
export default Profile;
