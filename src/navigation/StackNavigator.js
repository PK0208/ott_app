import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Whishlist from '../screens/Whishlist';
import Profile from '../screens/Profile';
import MovieByName from '../screens/MovieByName';
import PlayMovie from '../screens/PlayMovie';

import ActionAdventure from '../screens/MoviesByGeneres/ActionAdventureMovies';
import AnimatedMovies from '../screens/MoviesByGeneres/AnimatedMovies';
import ComedyMovies from '../screens/MoviesByGeneres/ComedyMovies';
import CrimeMovies from '../screens/MoviesByGeneres/CrimeMovies';
import DramaMovies from '../screens/MoviesByGeneres/DramaMovies';
import HorrorMovies from '../screens/MoviesByGeneres/HorrorMovies';
import RomanceMovies from '../screens/MoviesByGeneres/RomanceMovies';

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
      <Stack.Screen name="ActionAdventure" component={ActionAdventure} />
      <Stack.Screen name="AnimatedMovies" component={AnimatedMovies} />
      <Stack.Screen name="ComedyMovies" component={ComedyMovies} />
      <Stack.Screen name="CrimeMovies" component={CrimeMovies} />
      <Stack.Screen name="DramaMovies" component={DramaMovies} />
      <Stack.Screen name="HorrorMovies" component={HorrorMovies} />
      <Stack.Screen name="RomanceMovies" component={RomanceMovies} />
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
      <Stack.Screen name="MovieByName" component={MovieByName} />
      <Stack.Screen name="PlayMovie" component={PlayMovie} />
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
