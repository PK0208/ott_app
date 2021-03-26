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

  useEffect(() => {
    console.log('SerieslistDownloads');
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
