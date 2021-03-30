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
import Header from '../components/Header';

//import {LinearGradient} from 'expo-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #0d1f33;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 76) / 100}px;
`;

/* const Gradient = styled(LinearGradient)`
  height: 100%;
`; */

const {height, width} = Dimensions.get('window');

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

const Home = (props) => {
  const isFocused = useIsFocused();
  const [arr, setArr] = useState([dataMovies]);
  useEffect(() => {
    console.log('User effect props MoviesByName', props.route.params);
    console.log('Height', height, 'Width', width);
    setArr(dataMovies);
  }, [props, isFocused]);

  const Teasers = () => {
    const slidesTeasers = [
      {
        id: 1,
        teaserImg:
          'https://i.pinimg.com/originals/60/ec/cc/60eccc4148db15d0cef42a3f23351d61.jpg',
      },
      {
        id: 2,
        teaserImg:
          'https://i.pinimg.com/originals/60/ec/cc/60eccc4148db15d0cef42a3f23351d61.jpg',
      },
      {
        id: 3,
        teaserImg:
          'https://static.toiimg.com/thumb/78834613.cms?width=137&height=195&imgsize=',
      },
      {
        id: 4,
        teaserImg:
          'https://static.toiimg.com/thumb/69889115.cms?width=137&height=195&imgsize=',
      },
      {
        id: 5,
        teaserImg:
          'https://cdn.123telugu.com/content/wp-content/uploads/2020/02/HIT-m-2.jpg',
      },
      {
        id: 6,
        teaserImg: 'https://www.arrahmanian.com/assets/img/hindi/mom.jpg',
      },
      {
        id: 7,
        teaserImg:
          'https://www.auditionform.in/wp-content/uploads/2020/06/Dil-Bechara-Release-Date-Story-Cast-Trailer-Watch-on-Disney-Hotstar-1.jpg',
      },
    ];
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {slidesTeasers.map((item, key) => (
          <TouchableOpacity onPress={() => props.navigation.navigate('Teaser')}>
            <View style={styles.roundContainer}>
              <Image
                source={{
                  uri: item.teaserImg,
                }}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 90 / 2,
                  borderColor: '#F04F23',
                  borderWidth: 2,
                }}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const LatestMovies = () => {
    const slidesLatestMovies = [
      {
        id: 1,
        teaserImg:
          'https://i.pinimg.com/originals/60/ec/cc/60eccc4148db15d0cef42a3f23351d61.jpg',
      },
      {
        id: 2,
        teaserImg:
          'https://i.pinimg.com/originals/60/ec/cc/60eccc4148db15d0cef42a3f23351d61.jpg',
      },
      {
        id: 3,
        teaserImg:
          'https://static.toiimg.com/thumb/78834613.cms?width=137&height=195&imgsize=',
      },
      {
        id: 4,
        teaserImg:
          'https://static.toiimg.com/thumb/69889115.cms?width=137&height=195&imgsize=',
      },
      {
        id: 5,
        teaserImg:
          'https://cdn.123telugu.com/content/wp-content/uploads/2020/02/HIT-m-2.jpg',
      },
      {
        id: 6,
        teaserImg: 'https://www.arrahmanian.com/assets/img/hindi/mom.jpg',
      },
      {
        id: 7,
        teaserImg:
          'https://www.auditionform.in/wp-content/uploads/2020/06/Dil-Bechara-Release-Date-Story-Cast-Trailer-Watch-on-Disney-Hotstar-1.jpg',
      },
    ];
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {slidesLatestMovies.map((item, key) => (
          <View style={styles.roundContainer}>
            <Image
              source={{
                uri: item.teaserImg,
              }}
              style={{
                width: width * 0.33333333333,
                height: 160,
              }}
            />
          </View>
        ))}
      </ScrollView>
    );
  };

  const Generes = () => {
    const slidesGeneres = [
      {
        id: 1,
        teaserImg:
          'https://i.pinimg.com/originals/60/ec/cc/60eccc4148db15d0cef42a3f23351d61.jpg',
      },
      {
        id: 2,
        teaserImg:
          'https://i.pinimg.com/originals/60/ec/cc/60eccc4148db15d0cef42a3f23351d61.jpg',
      },
      {
        id: 3,
        teaserImg:
          'https://static.toiimg.com/thumb/78834613.cms?width=137&height=195&imgsize=',
      },
      {
        id: 4,
        teaserImg:
          'https://static.toiimg.com/thumb/69889115.cms?width=137&height=195&imgsize=',
      },
      {
        id: 5,
        teaserImg:
          'https://cdn.123telugu.com/content/wp-content/uploads/2020/02/HIT-m-2.jpg',
      },
      {
        id: 6,
        teaserImg: 'https://www.arrahmanian.com/assets/img/hindi/mom.jpg',
      },
      {
        id: 7,
        teaserImg:
          'https://www.auditionform.in/wp-content/uploads/2020/06/Dil-Bechara-Release-Date-Story-Cast-Trailer-Watch-on-Disney-Hotstar-1.jpg',
      },
    ];
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {slidesGeneres.map((item, key) => (
          <View style={styles.roundContainer}>
            <Image
              source={{
                uri: item.teaserImg,
              }}
              style={{
                width: width * 0.53333333333,
                height: 130,
              }}
            />
          </View>
        ))}
      </ScrollView>
    );
  };

  const TopMovies = () => {
    const slidesTopMovies = [
      {
        id: 1,
        teaserImg:
          'https://i.pinimg.com/originals/60/ec/cc/60eccc4148db15d0cef42a3f23351d61.jpg',
      },
      {
        id: 2,
        teaserImg:
          'https://i.pinimg.com/originals/60/ec/cc/60eccc4148db15d0cef42a3f23351d61.jpg',
      },
      {
        id: 3,
        teaserImg:
          'https://static.toiimg.com/thumb/78834613.cms?width=137&height=195&imgsize=',
      },
      {
        id: 4,
        teaserImg:
          'https://static.toiimg.com/thumb/69889115.cms?width=137&height=195&imgsize=',
      },
      {
        id: 5,
        teaserImg:
          'https://cdn.123telugu.com/content/wp-content/uploads/2020/02/HIT-m-2.jpg',
      },
      {
        id: 6,
        teaserImg: 'https://www.arrahmanian.com/assets/img/hindi/mom.jpg',
      },
      {
        id: 7,
        teaserImg:
          'https://www.auditionform.in/wp-content/uploads/2020/06/Dil-Bechara-Release-Date-Story-Cast-Trailer-Watch-on-Disney-Hotstar-1.jpg',
      },
    ];
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {slidesTopMovies.map((item, key) => (
          <View style={styles.roundContainer}>
            <Image
              source={{
                uri: item.teaserImg,
              }}
              style={{
                width: width * 0.33333333333,
                height: 160,
              }}
            />
          </View>
        ))}
      </ScrollView>
    );
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Header />
      <Container>
        <Poster source={require('../assests/images/black.jpg')}>
          <View>
            <TouchableHighlight
              style={[styles.buttonContainer, styles.sendButton]}
              onPress={() => console.log('Play Button Home Screen')}>
              <Text style={styles.buttonText}>PLAY</Text>
            </TouchableHighlight>
          </View>
        </Poster>
        <View></View>

        <Text
          style={{
            marginLeft: 17,
            fontSize: 14,
            color: '#FFFFFFE5',
            margin: 5,
            fontFamily: 'arial-bold',
          }}>
          Teaser
        </Text>

        <Teasers />

        <Text
          style={{
            marginLeft: 17,
            fontSize: 14,
            color: '#FFFFFFE5',
            margin: 5,
            fontFamily: 'arial-bold',
          }}>
          Latest Movies
        </Text>

        <LatestMovies />

        <Text
          style={{
            marginLeft: 17,
            fontSize: 14,
            color: '#FFFFFFE5',
            margin: 5,
            fontFamily: 'arial-bold',
          }}>
          Generes
        </Text>

        <Generes />

        <Text
          style={{
            marginLeft: 17,
            fontSize: 14,
            color: '#FFFFFFE5',
            margin: 5,
            fontFamily: 'arial-bold',
          }}>
          Top Movies
        </Text>

        <TopMovies />
        <Text
          style={{
            marginLeft: 17,
            fontSize: 14,
            color: '#FFFFFFE5',
            margin: 5,
            fontFamily: 'arial-bold',
          }}>
          Coming Soon
        </Text>

        {/* Slider Images */}

        <Image
          source={{
            uri:
              'https://i.pinimg.com/originals/2c/78/4a/2c784a07c47ec084c8a25bf217353484.jpg',
          }}
          style={{
            width: width * 0.93333333333,
            height: 160,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginBottom: 30,
          }}
        />
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
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 100,
    borderRadius: 5,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    alignSelf: 'center',
    shadowColor: '#00000041',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 1,
    elevation: 6,
    marginTop: height * 0.34002361275 * 2,
  },
  sendButton: {
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
  RectangularCard: {
    //width: width * 0.41066666666,
    //height: (height * 5.81286549708) / 4 / 4,
    //height: (height * 0.41066666666) / 2,
    //width: (width * 5.81286549708) / 22,
    //borderWidth: 1,
    marginLeft: 11,
    borderRadius: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 5,
  },
  roundContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 10,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  linearGradient: {
    //marginBottom: 25,
  },
});

export default Home;
