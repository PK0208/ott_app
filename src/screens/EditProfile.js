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

import Fontisto from 'react-native-vector-icons/Fontisto';

const {height, width} = Dimensions.get('window');

import styled from 'styled-components/native';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #040404;
`;

const EditProfile = (props) => {
  const isFocused = useIsFocused();
  const [isP, setP] = useState(false);

  useEffect(() => {
    console.log('EditProfile');
  }, [props, isFocused]);

  const dataMovies = [
    {
      id: 1,
      imageUri:
        'https://occ-0-2042-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZrpubnU9GVj1_grodqj39XYsKL87ZB96Vkg2N8xqd-284hAHFZUIvqAcQyeqnrg37pFZpzlzMcTVfeR25ojeTPRnWoMQcmocJ0Qn-bXYW3y5tXo.jpg?r=fea',
      name: 'Ep: 1 - Ashwathama ',
      d: 0,
    },
    {
      id: 2,
      imageUri:
        'https://occ-0-2042-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcSuxXFfDHykG6Z5_6vgV-j7OgjLzfJR3eZjooc0bUXlO3YWe6qQaZXMMI0ANC0LcNpDs1vDeu7oAty4M50vBT-spdrTPECYeZ-nkOXy_P-kXYdv.jpg?r=495',
      name: 'Ep: 2 - Halahala',
      d: 1,
    },
    {
      id: 3,
      imageUri:
        'https://occ-0-2042-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUd7-6Qz5k7hbyqERELaUSC6pbaLGuSWKDxcgAETm6TWE-Bp7seKSBHV3StzU6G60o4Zx5f19gM7-eYW--6Dy9YdPC3zIrZS217CeRfGRMXcffQl.jpg?r=4c5',
      name: 'Ep: 3 - Atapi Vatapi',
      d: 0,
    },
    {
      id: 4,
      imageUri:
        'https://occ-0-2042-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABbLgc8oDdfl5aYg5U7smaS9yFbiE4jQyb17lQADsxICL0H6RgHGgpHVG7JWyuOz4JwUDqj9tonkuauZP_QJ2bc0fKpMH75gcQyLIEdRQ80GyHv4j.jpg?r=3fd',
      name: 'Ep: 4 -Brahmahatya',
      d: 2,
    },
    {
      id: 5,
      imageUri:
        'https://occ-0-2042-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeRI-aJfgCqEUbD3TqVJWf4WsSO2xxw0dPXxWizL9k0Wg6d5SdEq3W-lGGYu3eeSBIazzc3tOgy4D_4eBh_W3yGMY8EygRJhpEaDb19TWJZbgwPy.jpg?r=1c0',
      name: 'Ep: 5 - Sarama',
      d: 1,
    },
    {
      id: 6,
      imageUri:
        'https://occ-0-2042-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSVrTxM3NHMfuSgAzAz9e0HfK-wOHm_768IprbZKJjmDVbos-gmyvo4LQSOpa2rRBS5dAJCUndZt25A7ss47MlyULb9aE4krr7azr2yXtMVn_U0C.jpg?r=918',
      name: 'Ep: 6 - Pretakalpa',
      d: 1,
    },
    {
      id: 7,
      imageUri:
        'https://occ-0-2042-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQ2UC0MWRK64Wu2PwtSFrBYzvSCxK7x3k7aJkVSRTGxyukwLUyFRZdIvIQJAh2Aqmoi3oaoLm_qhZnlGeSm9RGI_3D8Fb18ZzOqlu_TkHrCWxhcd.jpg?r=e1e',
      name: 'Ep: 7 - Rudra',
      d: 1,
    },
    {
      id: 8,
      imageUri:
        'https://occ-0-2042-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABb03hJs_VFm-bW7P6ZYoxC5pJIMMjsUiFsSUnEoPnl_ogyk2vV70u7ab1N1o1OJTfc-yciW76LPt4SM9T_bY4pgxRyQoWNrlcN-9jdzYKw2r8IuA.jpg?r=438',
      name: 'Ep: 8 - Yayati',
      d: 1,
    },
  ];

  const listOfMovies = ({item}) => {
    return (
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          props.navigation.navigate('MovieByName', {
            name: item.name,
            image: item.imageUri,
          });
        }}>
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
          <Ant name="checkcircleo" size={22} color="#FFFFFF" />
        ) : null}

        {item.d == '2' ? (
          <Ant name="checkcircleo" size={22} color="#FFFFFF" />
        ) : null}

        {/* <Ant name="checkcircleo" size={22} color="#FFFFFF" /> */}
        {/* <Ant name="pausecircleo" size={22} color="#FFFFFF" /> */}
      </TouchableOpacity>
    );
  };

  const chooseFile = async () => {
    console.log('chooseFile');
  };

  return (
    <SafeAreaView style={styles.container}>
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
            Edit Profile
          </Text>

          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Text
              style={{
                marginLeft: width * 0.10933333333,
                color: '#FFFFFF',
                fontSize: 15,
                fontFamily: 'Arial regular',
                //marginRight: width / 24,
              }}>
              cancel
            </Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.container1}>
          <View style={{alignItems: 'center', marginHorizontal: 30}}>
            <Image
              style={styles.productImg}
              source={require('../assests/images/nairobi.jpg')}
            />
          </View>
        </View> */}

        <View style={styles.header}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={chooseFile}>
              <Image
                style={styles.avatar}
                source={require('../assests/images/nairobi.jpg')}
                resizeMode="cover"
              />

              {/* {setFilePath.length > 0 ? (
                <Image
                  source={{
                    //uri: 'data:image/jpeg;base64,' + filePath.data,
                    uri: image,
                  }}
                  resizeMode="cover"
                  style={styles.imageStyle}
                />
              ) : null} */}
            </TouchableOpacity>

            {/* need to integrate icon to select images */}
          </View>
        </View>

        <View style={styles.container2}>
          <View style={styles.inputContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
                margin: 5,
              }}>
              <Ant
                name="user"
                size={22}
                color="#FFFFFF"
                style={{margin: 5, marginTop: 10}}
              />
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#707070',
                  margin: 5,
                }}></View>
              <TextInput
                style={styles.inputs}
                placeholder="John Williams"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                placeholderTextColor="white"
                //onChangeText={(email) => this.setState({email})}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
                margin: 5,
              }}>
              <Fontisto
                name="email"
                size={22}
                color="#FFFFFF"
                style={{margin: 5, marginTop: 10}}
              />
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#707070',
                  margin: 5,
                }}></View>
              <TextInput
                style={styles.inputs}
                placeholder="johnwilliams@gmail.com"
                //secureTextEntry={true}
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                placeholderTextColor="white"
                //onChangeText={(password) => this.setState({password})}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.sendButton]}
          onPress={() => console.log('Update Change Password')}>
          <Text
            style={{
              color: '#000000',
              fontFamily: 'arial-bold',
              margin: 5,
              fontSize: 11,
            }}>
            UPDATE
          </Text>
        </TouchableOpacity>
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040404',
  },
  container1: {
    flex: 1,
    marginTop: 50,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#DCDCDC',
    marginTop: 48,
  },
  productImg: {
    width: 117,
    height: 117,
    borderRadius: 117 / 2,
    borderWidth: 2,
    borderColor: 'white',
  },
  inputContainer: {
    //borderBottomColor: '#F5FCFF',
    backgroundColor: '#040404',
    borderRadius: 9,
    borderColor: '#FFFFFF',
    borderWidth: 0.8 / 4,
    width: 300,
    height: 45,
    marginBottom: 17,
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'center',
    //shadowColor: '#808080',
    /* shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, */
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    //borderBottomColor: '#FFFFFF',
    //flex: 1,
    //borderWidth: 0.8,
  },
  buttonContainer: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: width * 0.30058666666,
    borderRadius: 10,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    alignSelf: 'center',
    shadowColor: '#00000041',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 1,
    elevation: 6,
    //marginTop: 55,
    backgroundColor: '#FFFFFF',
    marginTop: 5,
  },
  sendButton: {
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#040404',
    marginTop: 56,
  },
  headerContent: {
    //padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
});
export default EditProfile;
