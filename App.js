import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as firebase from 'firebase';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ResetScreen from './screens/ResetScreen';
import BlankScreen from './screens/blankScreen';

var firebaseConfig = {
  apiKey: "AIzaSyBaIA0gPBFW4AmFWHhYFsyj46m5fIsS694",
  authDomain: "my-first-app-e9dfb.firebaseapp.com",
  databaseURL: "https://my-first-app-e9dfb.firebaseio.com",
  projectId: "my-first-app-e9dfb",
  storageBucket: "my-first-app-e9dfb.appspot.com",
  messagingSenderId: "153713254014",
  appId: "1:153713254014:web:a8000f99c9d7e7b574c22f"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const AppStack = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Todo'
      }
    }
},
{
    defaultNavigationOptions: {
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'coral', height: 80 }
    }
})

const AuthStack = createStackNavigator({
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login'
      },
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: {
        title: 'SignUp'
      }
    },
    Reset: {
      screen: ResetScreen,
      navigationOptions: {
        title: 'Reset Password'
      }
    }
},
{
    defaultNavigationOptions: {
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'coral', height: 80 }
    }
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Blank: BlankScreen,
      Auth: AuthStack,
      App: AppStack
    },
    {
      initialRouteName: 'Blank'
    }
  )
);