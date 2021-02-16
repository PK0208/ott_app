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

const Home = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {}, [props, isFocused]);

  const SingleRow = () => {
    const slides = [
      {
        title: '1 ',
        uri:
          'http://www.teluguone.com/photos/uploads/Nishabdham-Release-Date-Pos.jpg',
      },
      {
        title: '2 ',
        uri:
          'http://www.teluguone.com/photos/uploads/Sanjay-Dutt-KGF-Poster.jpg',
      },
      {
        title: '3 ',
        uri:
          'http://www.teluguone.com/photos/uploads/Gang-Leader-Teaser-Announce.jpg',
      },
      {
        title: '4 ',
        uri:
          'http://www.teluguone.com/photos/uploads/George-Reddy-Movie-First-Lo.jpg',
      },
      {
        title: '11 ',
        uri:
          'http://www.teluguone.com/photos/uploads/Nishabdham-Release-Date-Pos.jpg',
      },
      {
        title: '21 ',
        uri:
          'http://www.teluguone.com/photos/uploads/Sanjay-Dutt-KGF-Poster.jpg',
      },
      {
        title: '31 ',
        uri:
          'http://www.teluguone.com/photos/uploads/Gang-Leader-Teaser-Announce.jpg',
      },
      {
        title: '41 ',
        uri:
          'http://www.teluguone.com/photos/uploads/George-Reddy-Movie-First-Lo.jpg',
      },
    ];
    return (
      <View>
        <Card containerStyle={styles.cardStyle}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              backgroundColor: '#0D1F33',
            }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {slides.map((item, key) => (
                <View style={{margin: 5}}>
                  <Image
                    source={{
                      uri: item.uri,
                    }}
                    style={{
                      width: width * 0.42933333333,
                      height: 90,
                      margin: 5,
                    }}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        </Card>
      </View>
    );
  };

  return (
    /*  <View style={{height: '100%', backgroundColor: '#0D1F33'}}>
      <ImageSliderComponent />
    </View> */

    <SafeAreaView style={styles.container}>
      {/* <ImageSliderComponent /> */}
      <ScrollView>
        <View style={{marginTop: 25, backgroundColor: '#0D1F33'}}>
          <Text
            style={{
              color: '#D2DAE0',
              fontFamily: 'Al Nile',
              fontWeight: 'bold',
              fontSize: 18,
              margin: 10,
            }}>
            Popular Movies
          </Text>
          <SingleRow />
          <Text
            style={{
              color: '#D2DAE0',
              fontFamily: 'Al Nile',
              fontWeight: 'bold',
              fontSize: 18,
              margin: 10,
            }}>
            Popular Series
          </Text>
          <SingleRow />
          <Text
            style={{
              color: '#D2DAE0',
              fontFamily: 'Al Nile',
              fontWeight: 'bold',
              fontSize: 18,
              margin: 10,
            }}>
            Coming Soon
          </Text>
          <SingleRow />
          <Text
            style={{
              color: '#D2DAE0',
              fontFamily: 'Al Nile',
              fontWeight: 'bold',
              fontSize: 18,
              margin: 10,
            }}>
            Movie Genres
          </Text>
          <SingleRow />
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
  cardStyle: {
    backgroundColor: '#0D1F33',
    //padding: 10,
    //marginLeft: 0,
    //marginRight: 0,
    //marginTop: 0,
  },
});
export default Home;
