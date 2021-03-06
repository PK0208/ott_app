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
import Ant from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('window');

const Downloads = (props) => {
  const isFocused = useIsFocused();
  const [isP, setP] = useState(false);

  useEffect(() => {}, [props, isFocused]);

  const dataMovies = [
    {
      id: 1,
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VwB1KWCwZsTkTCt-1AqLQulVrkjn9Jr96Q&usqp=CAU',
      name: 'Mirzapur',
      d: 0,
    },
    {
      id: 2,
      imageUri:
        'https://blogtobollywood.com/wp-content/uploads/2021/01/Telugu-movie-Red.jpg',
      name: 'Red',
      d: 1,
    },
    {
      id: 3,
      imageUri:
        'https://i.pinimg.com/originals/e5/7b/5a/e57b5a031e365fb54fded45bbe8bdee0.jpg',
      name: 'Breathe',
      d: 0,
    },
    {
      id: 4,
      imageUri:
        'https://image.scoopwhoop.com/w360/s4.scoopwhoop.com/anj2/5dd6457650758d76b6503bb2/bd3f981a-79ea-4c43-a22b-5a73bd92b771.jpg.webp',
      name: 'Sacred Games',
      d: 2,
    },
    {
      id: 5,
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtc3n-wll3kCg_HrAWQl9FwVK9Y6UKsla7kg&usqp=CAU',
      name: 'Money Heist',
      d: 1,
    },
  ];

  const listOfMovies = ({item}) => {
    return (
      <TouchableOpacity
        style={[styles.card]}
        /* onPress={() => {
          props.navigation.navigate('MovieByName', {
            name: item.name,
            image: item.imageUri,
          });
        }} */
      >
        <Image
          style={styles.cardImage}
          source={{uri: item.imageUri}}
          resizeMode="contain"
        />
        <Text style={styles.title}>{item.name}</Text>

        {/* {item.d == '0' ? (
          <Ant name="checkcircleo" size={22} color="#FFFFFF" />
        ) : (
          <Ant name="pausecircleo" size={22} color="#FFFFFF" />
        )} */}

        {item.d == '0' ? (
          <Ant name="checkcircleo" size={22} color="#FFFFFF" />
        ) : null}

        {item.d == '1' ? (
          <Ant name="pausecircleo" size={22} color="#FFFFFF" />
        ) : null}

        {item.d == '2' ? (
          <Ant
            name="right"
            size={22}
            color="#FFFFFF"
            onPress={() => props.navigation.navigate('SeriesListDownload')}
          />
        ) : null}

        {/* <Ant name="checkcircleo" size={22} color="#FFFFFF" /> */}
        {/* <Ant name="pausecircleo" size={22} color="#FFFFFF" /> */}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontFamily: 'arial-bold',
          fontSize: 18,
          marginTop: 42,
        }}>
        Downloads
      </Text>

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
    width: width * 0.88850666666,
    //height: 150,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    //borderWidth: 1,
    //marginLeft: 21,
  },
  cardImage: {
    height: 70,
    width: 120,
    //borderRadius: 15,
  },
  title: {
    fontSize: 12,
    flex: 1,
    color: '#FFFFFF',
    fontFamily: 'arial-bold',
    marginLeft: 7,
  },
});
export default Downloads;
