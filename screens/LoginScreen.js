import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, TextInput, Button, Alert } from 'react-native';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
  state = { 
    email: '',
    password: ''
  };

  handleLogin = () => {
    const { email, password} = this.state;

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        // .then(userInfo => { console.log(userInfo) })
        .catch(error => Alert.alert('error', error.message));
  };
  
  render() {
    return (
      <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
        <View style={styles.container}>
          <Text style={ styles.text }> Login </Text>

          <TextInput 
            style={styles.input} 
            placeholder='email' 
            autoCapitalize='none' 
            keyboardType='email-address' 
            value={ this.state.email }
            onChangeText={ email => this.setState({ email })}
          ></TextInput>

          <TextInput 
            style={styles.input}
            placeholder='password'
            secureTextEntry
            autoCapitalize='none'
            onChangeText={ password => this.setState({ password })}
            value={ this.state.password }
          ></TextInput>

          <Button title='Login' color='coral' onPress={this.handleLogin}/>

          <Text style={ styles.firstButton }></Text>

          <Button title='Signup' onPress={ () => this.props.navigation.replace('Signup') } />

          <Text style={ styles.secondButton }></Text>

          <Button title='Reset Password' onPress={ () => this.props.navigation.replace('Reset') }/>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 25
  },
  text: {
    paddingBottom: 20,
    fontSize: 16,
    fontWeight: 'normal'
  },
  input: {
    marginBottom: 20,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd'
  },
  firstButton: {
    paddingBottom: 60,
  },
  secondButton: {
    paddingBottom: 20
  }
});