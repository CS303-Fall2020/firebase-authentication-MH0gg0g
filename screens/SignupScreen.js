import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, TextInput, Button, Alert } from 'react-native';
import * as firebase from 'firebase';

export default class SignupScreen extends React.Component {
  state = { 
    email: '',
    password: '',
    passwordConfirm: ''
  };

  handleSignup = () => {
    const { email, password, passwordConfirm } = this.state

    if(password != passwordConfirm) {
      Alert.alert("passwords doesn't match");
      return;
    }

    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          return userCredentials.user.updateProfile({ email: email})
        })
        .catch(error => Alert.alert('error', error.message));
  };
  
  render() {
      return (
  
        <TouchableWithoutFeedback onPress={ () => 
          Keyboard.dismiss()
        }>
        <View style={styles.container}>
          <Text style={ styles.text }> Signup To get Started! </Text>

          <TextInput 
              style={styles.input} 
              placeholder='email' 
              autoCapitalize='none' 
              keyboardType='email-address' 
              onChangeText={ email => this.setState({ email })}
              value={ this.state.email }
          ></TextInput>

          <TextInput 
              style={styles.input} 
              placeholder='password' 
              secureTextEntry 
              autoCapitalize='none' 
              onChangeText={ password => this.setState({ password })}
              value={ this.state.password }
          ></TextInput>

          <TextInput 
              style={styles.input} 
              placeholder='confirm password' 
              secureTextEntry 
              autoCapitalize='none' 
              onChangeText={ passwordConfirm => this.setState({ passwordConfirm })}
              value={ this.state.passwordConfirm }
          ></TextInput>

          <Button 
              title='Signup' 
              color='coral'
              onPress={this.handleSignup}
          />

          <Text style={ styles.firstButton }></Text>

          <Button title='Login' onPress={ () => this.props.navigation.replace('Login') } />

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
    fontSize: 16
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