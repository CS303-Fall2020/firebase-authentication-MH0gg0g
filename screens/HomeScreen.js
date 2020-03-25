import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as firebase from 'firebase';

export default class HomeScreen extends React.Component {
    
  state = {
    email: ''
  }

  componentDidMount() {
    const { email } = firebase.auth().currentUser;

    this.setState({ email });

  }

  signoutHandler = () => {
      firebase.auth().signOut();
  }

  render() {
      return (
  
        <View style={styles.container}>
          <Text style={styles.firstButton} > Welcome {this.state.email} </Text>

          <Button title='Signout' onPress={this.signoutHandler}/>
        </View>
  
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      padding: 25
    },
    firstButton: {
      paddingBottom: 20
    }
  });