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
  height: ${(Dimensions.get('window').height * 100) / 100}px;
`;

const {height, width} = Dimensions.get('window');

const Teaser = (props) => {
  const isFocused = useIsFocused();
  const [msg, setMsg] = useState(true);

  useEffect(() => {
    console.log('User effect Teaser component');
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!');
      setMsg(false);
    }, 2000);

    timer1();
    return () => clearTimeout(timer);
  }, [props, isFocused]);

  const timer1 = () =>
    setTimeout(() => {
      console.log('This will run after 5 second!');
      setMsg(true);
    }, 5000);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Poster source={require('../assests/images/black.jpg')}>
          {/* <Text
            style={{
              color: 'white',
              fontSize: 20,
            }}>
            {msg}
          </Text> */}
          {/* <View
            style={{
              marginTop: height * 0.34002361275 * 2.5,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <AntIcon
              name="pluscircleo"
              color="white"
              size={40}
              onPress={() => console.log('Plus')}
            />
            <AntIcon
              name="playcircleo"
              color="white"
              size={40}
              onPress={() => console.log('Play')}
            />
            <AntIcon
              name="sharealt"
              color="white"
              size={40}
              onPress={() => console.log('Share')}
            />
          </View> */}

          {/* <TouchableOpacity style={[styles.buttonContainer, styles.sendButton]}>
            <Text style={styles.buttonText}>ADD TO WHISHLIST</Text>
          </TouchableOpacity> */}

          {msg == true ? (
            <TouchableOpacity
              style={[styles.buttonContainerH, styles.sendButtonH]}>
              <Text style={styles.buttonTextH}>ADD TO WHISHLIST</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.buttonContainer, styles.sendButton]}>
              <Text style={styles.buttonText}>ADD TO WHISHLIST</Text>
            </TouchableOpacity>
          )}

          <View
            style={{
              marginTop: 82,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <AntIcon
              name="pluscircleo"
              color="white"
              size={40}
              onPress={() => console.log('Plus')}
            />
            <AntIcon
              name="playcircleo"
              color="white"
              size={40}
              onPress={() => console.log('Play')}
            />
            <AntIcon
              name="sharealt"
              color="white"
              size={40}
              onPress={() => console.log('Share')}
            />
          </View>
        </Poster>
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
    width: width * 0.512,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    alignSelf: 'center',
    //shadowColor: '#00000041',
    //shadowOffset: {width: 1, height: 3},
    //shadowOpacity: 1,
    //elevation: 6,
    marginTop: height * 0.34002361275 * 2.2,
  },
  sendButton: {
    backgroundColor: '#00000',
  },
  buttonContainerH: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: width * 0.512,
    //borderColor: '#FFFFFF',
    //borderWidth: 1,
    alignSelf: 'center',
    //shadowColor: '#00000041',
    //shadowOffset: {width: 1, height: 3},
    //shadowOpacity: 1,
    //elevation: 6,
    marginTop: height * 0.34002361275 * 2.2,
  },
  sendButtonH: {
    //backgroundColor: '#00000',
  },
  buttonTextH: {
    //color: '#FFFFFF',
    fontFamily: 'verdanab',
    fontSize: 1,
    paddingVertical: 10,
    marginVertical: 10,
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
    backgroundColor: '#000000',
    paddingVertical: 10,
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  buttonText: {
    color: '#FFFFFF',
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
});

export default Teaser;
