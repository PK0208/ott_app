import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import Logo from '../screens/Logo';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Teaser from '../screens/Teaser';
import Settings from '../screens/Settings';
import ChangePassword from '../screens/ChangePassword';
import ChangePhoneNumber from '../screens/ChangePhoneNumber';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AuthStack.Navigator mode={'model'} screenOptions={{headerShown: false}}>
        <AuthStack.Screen name={'Logo'} component={Logo} />
        <AuthStack.Screen name={'Login'} component={Login} />
        <AuthStack.Screen name={'SignUp'} component={SignUp} />
        <AuthStack.Screen name={'Home'} component={TabNavigator} />
        <AuthStack.Screen name={'Teaser'} component={Teaser} />
        <AuthStack.Screen name={'Settings'} component={Settings} />
        <AuthStack.Screen name={'ChangePassword'} component={ChangePassword} />
        <AuthStack.Screen
          name={'ChangePhoneNumber'}
          component={ChangePhoneNumber}
        />
        {/* <AuthStack.Screen name={'Login'} component={Login} />
        <AuthStack.Screen name={'SignUp'} component={SignUp} />
        <AuthStack.Screen name={'SignUp'} component={SignUp} />
        <AuthStack.Screen name={'Forgot Password'} component={ForgotPassword} /> */}
      </AuthStack.Navigator>
    </>
  );
};

export default AuthStackNavigator;
