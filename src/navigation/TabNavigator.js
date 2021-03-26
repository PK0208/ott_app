import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  MainStackNavigator,
  SearchStacKNavigator,
  DownloadStacKNavigator,
  WishListStacKNavigator,
  ProfileStacKNavigator,
} from './StackNavigator';
import {StyleSheet} from 'react-native';

import Ant from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const name = '';

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({}) => ({})}
      /* tabBarOptions={{
        activeTintColor: '#2F7C6E',
        inactiveTintColor: '#FFFFFF',
        activeBackgroundColor: '#FFFFFF',
        tabStyle: {
          //borderTopLeftRadius: 25,
          //borderTopRightRadius: 25,
          //borderTopLeftColor: '#0D1F33',
          //borderTopRightColor: '#0D1F33',
          //tabBarBackground: '#0D1F33',
          //borderColor: '#0D1F33',
          //postion: 'absolute',
        },
      }} */
      tabBarOptions={{
        activeTintColor: '#D0D0D0E6',
        activeBackgroundColor: '#000000',
        inactiveBackgroundColor: '#000000',
        showLabel: false,
      }}
      /* appearence={{
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        tabBarBackground: '#121A23',
        //floating: true,
      }} */
      //style={{position: 'absolute'}}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ant
              name="home"
              size={20}
              //color={focused ? '#FFFFFF' : '#222222'}
              color="#FFFFFF"
              focused={focused}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchStacKNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ant
              name="search1"
              size={20}
              //color={focused ? color : '#222222'}
              color="#FFFFFF"
              focused={focused}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Downlaods"
        component={DownloadStacKNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ant
              name="download"
              size={20}
              //color={focused ? color : '#222222'}
              color="#FFFFFF"
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Whishlist"
        component={WishListStacKNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ant
              name="hearto"
              size={20}
              //color={focused ? color : '#222222'}
              color="#FFFFFF"
              focused={focused}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStacKNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ant
              name="user"
              size={20}
              color="#FFFFFF"
              //color={focused ? color : '#FFFFFF'}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
