import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Whishlist from '../screens/Whishlist';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  headerShown: false,
};

const MainStackNavigator = ({navigation, route}) => {
  navigation.setOptions({
    tabBarVisible: route.state ? (route.state.index > 0 ? true : true) : null,
  });
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const SearchStacKNavigator = ({navigation, route}) => {
  navigation.setOptions({
    tabBarVisible: route.state ? (route.state.index > 0 ? true : true) : null,
  });
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

const WishListStacKNavigator = ({navigation, route}) => {
  navigation.setOptions({
    tabBarVisible: route.state ? (route.state.index > 0 ? true : true) : null,
  });
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Whishlist" component={Whishlist} />
    </Stack.Navigator>
  );
};

const ProfileStacKNavigator = ({navigation, route}) => {
  navigation.setOptions({
    tabBarVisible: route.state ? (route.state.index > 0 ? true : true) : null,
  });
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  SearchStacKNavigator,
  WishListStacKNavigator,
  ProfileStacKNavigator,
};
