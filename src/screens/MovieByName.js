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
  FlatList,
} from 'react-native';
import Appbar from '../components/Appbar';
//import ImageSlider from '../components/ImageSlider';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {Card, CardItem, Body} from 'native-base';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import FeatherIcon from 'react-native-vector-icons/FontAwesome';
import ImageSliderComponent from '../components/ImageSlider';

const {height, width} = Dimensions.get('window');

const MovieByName = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log('User effect props', props.route.params);
  }, [props, isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 3}}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: props.route.params.image,
          }}
          resizeMode="contain"
        />
      </View>
      <ScrollView>
        <View style={{flex: 2, backgroundColor: '#0D1F33'}}>
          <Text style={{color: 'white'}}> {props.route.params.name}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1F33',
  },
  formContent: {
    flexDirection: 'row',
    marginTop: 10,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  card: {
    width: width,
    //height: 150,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth: 1,
  },
  cardImage: {
    height: 70,
    width: 120,
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    flex: 1,
    color: '#FFFFFF',
  },
  tinyLogo: {
    width: '100%',
    height: '100%',
  },
});
export default MovieByName;
