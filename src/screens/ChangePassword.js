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
import Icon from 'react-native-vector-icons/AntDesign';

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

const ChangePassword = (props) => {
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
              marginLeft: width * 0.29333333333,
              color: '#FFFFFF',
              fontSize: 18,
              fontFamily: 'arial-bold',
            }}>
            Change Password
          </Text>

          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Text
              style={{
                marginLeft: width * 0.10933333333,
                color: '#FFFFFF',
                fontSize: 15,
                fontFamily: 'Arial regular',
              }}>
              cancel
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 50}}></View>
        <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Current Password"
              underlineColorAndroid="transparent"
              //onChangeText={(name_address) => this.setState({name_address})}
              placeholderTextColor="white"
            />
          </View>
        </View>

        <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="New Password"
              underlineColorAndroid="transparent"
              //onChangeText={(name_address) => this.setState({name_address})}
              placeholderTextColor="white"
            />
          </View>
        </View>

        <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Confirm Password"
              underlineColorAndroid="transparent"
              //onChangeText={(name_address) => this.setState({name_address})}
              placeholderTextColor="white"
            />
          </View>
        </View>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.sendButton]}
          onPress={() => console.log('Update Change Password')}>
          <Text style={{color: '#000000', fontFamily: 'arial-bold', margin: 5}}>
            UPDATE
          </Text>
        </TouchableOpacity>
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
    padding: 5,
  },
  sendButtonS: {
    backgroundColor: '#555555',
  },
  formContent: {
    flexDirection: 'row',
    margin: 5,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#555555',
    borderRadius: 10,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 25,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#555555',
    flex: 1,
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
    marginTop: 55,
    backgroundColor: '#FFFFFF',
  },
  sendButton: {
    backgroundColor: '#FFFFFF',
  },
});

export default ChangePassword;
