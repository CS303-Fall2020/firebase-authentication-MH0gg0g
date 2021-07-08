import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { render } from 'react-dom';

export default class blankScreen extends React.Component {
    
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            // console.log(user)
            if (user !== null) {
                this.props.navigation.navigate('App');
              }
              else
              this.props.navigation.navigate('Auth');
        })
    }
  
    render() {
        return(
          <View>
              <Text> 
                  
              </Text>
          </View>
        )
    }
}