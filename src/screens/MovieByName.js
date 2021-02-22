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
  TouchableHighlight,
} from 'react-native';
import Appbar from '../components/Appbar';
//import ImageSlider from '../components/ImageSlider';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {Card, CardItem, Body} from 'native-base';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/FontAwesome';
import ImageSliderComponent from '../components/ImageSlider';

const {height, width} = Dimensions.get('window');

const MovieByName = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log('User effect props MovieByName', props.route.params);
  }, [props, isFocused]);

  const dataMovies = [
    {
      id: 1,
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VwB1KWCwZsTkTCt-1AqLQulVrkjn9Jr96Q&usqp=CAU',
      name: 'Mirzapur',
    },
    {
      id: 2,
      imageUri:
        'https://blogtobollywood.com/wp-content/uploads/2021/01/Telugu-movie-Red.jpg',
      name: 'Red',
    },
    {
      id: 3,
      imageUri:
        'https://i.pinimg.com/originals/e5/7b/5a/e57b5a031e365fb54fded45bbe8bdee0.jpg',
      name: 'Breathe',
    },
    {
      id: 4,
      imageUri:
        'https://image.scoopwhoop.com/w360/s4.scoopwhoop.com/anj2/5dd6457650758d76b6503bb2/bd3f981a-79ea-4c43-a22b-5a73bd92b771.jpg.webp',
      name: 'Sacred Games',
    },
    {
      id: 5,
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtc3n-wll3kCg_HrAWQl9FwVK9Y6UKsla7kg&usqp=CAU',
      name: 'Money Heist',
    },
    {
      id: 5,
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtc3n-wll3kCg_HrAWQl9FwVK9Y6UKsla7kg&usqp=CAU',
      name: 'Money Heist',
    },
  ];

  const listOfMovies = ({item}) => {
    return (
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          console.log(item);
        }}>
        <Image
          style={styles.cardImageN}
          source={{uri: item.imageUri}}
          resizeMode="contain"
        />
        <Text style={styles.title}>{item.name}</Text>
        <FeatherIcon
          name="play"
          size={22}
          color="white"
          onPress={() => console.log('Play Movie')}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.item1}>
        <Image
          style={styles.cardImage}
          resizeMode="cover"
          source={{
            uri: props.route.params.image,
          }}
        />
      </View>
      <View style={styles.item2}>
        <Text style={styles.text}>2020</Text>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.sendButton]}
            onPress={() => console.log('login')}>
            <AntIcon
              name="caretright"
              color="#000000"
              size={15}
              style={{margin: 5}}
            />
            <Text style={styles.buttonText}>PLAY</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer1, styles.sendButton]}
            onPress={() => props.navigation.navigate('Wishlist')}>
            <EntypoIcon
              name="plus"
              color="#000000"
              size={15}
              style={{margin: 5}}
            />
            <Text style={styles.buttonText} numberOfLines={1}>
              MY LIST
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 23}}>
          <Text
            style={{
              color: '#BEBABA',
              fontFamily: 'HelveticaNeue Regular',
              fontSize: 12,
            }}>
            Years after a police encounter separates him from his lover, an
            angry young man goes in a killing spree, with an equally vengeful
            cop on his heels
          </Text>

          <Text
            style={{
              color: '#D2DAE0',
              fontFamily: 'Al Nile',
              fontSize: 18,
              marginVertical: 10,
            }}>
            More Episodes
          </Text>
        </View>

        <View style={{flex: 1}}>
          <ScrollView>
            <View style={{flex: 1}}>
              <FlatList
                nestedScrollEnabled={true}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}
                data={dataMovies}
                renderItem={listOfMovies}
                keyExtractor={(item, index) => index.toString()}
                //style={{marginHorizontal: 5}}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "orange"
    backgroundColor: '#0D1F33',
  },
  text: {
    fontFamily: 'HelveticaNeue Regular',
    fontSize: 12,
    color: '#BEBABA',
    marginLeft: 27,
    margin: 5,
  },
  item1: {
    flex: 1,
    backgroundColor: '#0D1F33',
  },
  item2: {
    flex: 1,
    backgroundColor: '#0D1F33',
  },
  cardImage: {
    height: '100%',
    width: '100%',
  },
  buttonContainer: {
    height: height * 0.02355072463,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: width * 0.184,
    borderRadius: 9,
    borderColor: '#0D1F33',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
    marginLeft: 23,
    backgroundColor: '#FFFFFF',
  },
  buttonContainer1: {
    height: height * 0.02355072463,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: width * 0.24533333333,
    borderRadius: 9,
    borderColor: '#0D1F33',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
    marginLeft: 23,
    backgroundColor: '#FFFFFF',
  },
  sendButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  buttonText: {
    color: '#000000',
    fontFamily: 'verdanab',
    fontSize: 13,
    paddingVertical: 10,
    marginVertical: 10,
  },
  card: {
    width: width * 0.88850666666,
    //height: 150,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth: 1,
    marginLeft: 21,
  },
  cardImageN: {
    height: 70,
    width: 120,
    borderRadius: 15,
  },
  title: {
    fontSize: 14,
    flex: 1,
    color: '#FFFFFF',
    marginLeft: 7,
    fontFamily: 'arial-bold',
  },
});
export default MovieByName;
