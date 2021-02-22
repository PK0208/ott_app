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
  ImageBackground,
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
          'https://content1.jdmagicbox.com/movies/mumbai_10725989252019_06_14_07_12_17_220.jpg?fit=around|210:308&crop=210:308;*,*',
      },
      {
        title: '2 ',
        uri:
          'https://www.teahub.io/photos/full/253-2535453_comedy-film-mr-bean.jpg',
      },
      {
        title: '3 ',
        uri:
          'https://i.pinimg.com/originals/77/4c/39/774c3958d113be25ee5a40362e99c2d5.jpg',
      },
      {
        title: '4 ',
        uri:
          'https://www.filmibeat.com/img/220x80x275/popcorn/movie_posters/evaru-20190711164519-18436.jpg',
      },
      {
        title: '11 ',
        uri: 'https://www.yetstar.com/wp-content/uploads/2020/06/download.jpg',
      },
      {
        title: '21 ',
        uri:
          'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABao9TMw58bSJyX0HpbyhY5gizoMfnwLMvGEoO6IfZvHjup0AcSIDaiEsWWwm6P_u6fHmVyL1eaDXasAnNgeBxY0C-ADjB9ze-S5dzDFbEHkC8vFWNmlKsFCWkmvy.jpg',
      },
      {
        title: '31 ',
        uri:
          'https://mk0timesnextw7n7qiu0.kinstacdn.com/wp-content/uploads/2020/04/Loser-web-series-new.jpg',
      },
      {
        title: '41 ',
        uri:
          'https://media.gqindia.com/wp-content/uploads/2020/05/top-image-15.jpg',
      },
    ];
    return (
      <View style={{backgroundColor: '#0D1F33'}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            backgroundColor: '#0D1F33',
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {slides.map((item, key) => (
              <View style={{margin: 5}}>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('MovieByName', {
                      name: item.name,
                      image: item.uri,
                    })
                  }>
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
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  };

  const NavigateToGenres = (name) => {
    if (name == 'Action and adventure') {
      console.log('Navigating to ', name);
      props.navigation.navigate('ActionAdventure');
    } else if (name == 'Comedy') {
      console.log('Navigating to ', name);
      props.navigation.navigate('ComedyMovies');
    } else if (name == 'Drama') {
      console.log('Navigating to ', name);
      props.navigation.navigate('DramaMovies');
    } else if (name == 'Crime') {
      console.log('Navigating to ', name);
      props.navigation.navigate('CrimeMovies');
    } else if (name == 'Animated') {
      console.log('Navigating to ', name);
      props.navigation.navigate('AnimatedMovies');
    } else if (name == 'Horror') {
      console.log('Navigating to ', name);
      props.navigation.navigate('HorrorMovies');
    } else if (name == 'Romance') {
      console.log('Navigating to ', name);
      props.navigation.navigate('RomanceMovies');
    }
  };

  const GenresRow = () => {
    const slidesGeners = [
      {
        title: '1 ',
        name: 'Action and adventure',
        uri:
          'https://content1.jdmagicbox.com/movies/mumbai_10725989252019_06_14_07_12_17_220.jpg?fit=around|210:308&crop=210:308;*,*',
      },
      {
        title: '2 ',
        name: 'Comedy',
        uri:
          'https://www.teahub.io/photos/full/253-2535453_comedy-film-mr-bean.jpg',
      },
      {
        title: '3 ',
        name: 'Drama',
        uri:
          'https://i.pinimg.com/originals/77/4c/39/774c3958d113be25ee5a40362e99c2d5.jpg',
      },
      {
        title: '4 ',
        name: 'Crime',
        uri:
          'https://www.filmibeat.com/img/220x80x275/popcorn/movie_posters/evaru-20190711164519-18436.jpg',
      },
      {
        title: '11 ',
        name: 'Animated',
        uri:
          'https://cdn.cdnparenting.com/articles/2019/02/03181714/240651844-H.jpg',
      },
      {
        title: '21 ',
        name: 'Romance',
        uri:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6fRceGxkHLHTEJWsNC1GI205O2vjNOhp0Q&usqp=CAU',
      },
      {
        title: '31 ',
        name: 'Horror',
        uri:
          'https://qqcdnpictest.mxplay.com/pic/484f535d77542bca63e21efb896f4cd6/en/2x3/320x480/0b192c87e58113035031e044bfec3300_1280x1920.webp',
      },
    ];
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            backgroundColor: '#0D1F33',
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {slidesGeners.map((item, key) => (
              <TouchableOpacity onPress={() => NavigateToGenres(item.name)}>
                <View style={styles.genreCard}>
                  <ImageBackground
                    style={{flex: 1, borderRadius: 24}}
                    imageStyle={{borderRadius: 24}}
                    source={{
                      uri: item.uri,
                    }}
                    blurRadius={1}>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        textAlign: 'center',
                        marginTop: '25%',
                        fontFamily: 'MuktaMalar-SemiBold',
                        fontSize: 19,
                      }}>
                      {item.name}
                    </Text>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  };

  return (
    /*  <View style={{height: '100%', backgroundColor: '#0D1F33'}}>
      <ImageSliderComponent />
    </View> */

    <SafeAreaView style={styles.container}>
      <ImageSliderComponent />
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
          <GenresRow />
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
  genreCard: {
    width: width * 0.41066666666,
    height: height * 0.17203219315,
    //borderWidth: 1,
    marginLeft: 11,
    //borderRadius: 24,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
export default Home;
