import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import * as firebase from 'firebase';

export default class ResetScreen extends React.Component {
      
  state = {
    email: ''
  }
  
  resetHandler = () => {
    firebase
    .auth()
    .sendPasswordResetEmail(this.state.email)
    .then(() => Alert.alert('Password reset email sent.'))
    .catch(error => Alert.alert('error', error.message));
  }

  render() {
      return (
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() } >
          <View style={styles.container}>
            <Text style={ styles.text }> Reset password? </Text>

            <TextInput 
                style={styles.input} 
                placeholder='email'
                autoCapitalize='none' 
                keyboardType='email-address' 
                autoCorrect={false}
                onChangeText={ email => this.setState({ email })}
                value={ this.state.email }
            ></TextInput>

            <Button 
                title='Send Reset Email' 
                color='coral' 
                onPress={this.resetHandler}
            />

            <Text style={ styles.firstButton }></Text>

            <Button 
                title='Signup' 
                onPress={ () => this.props.navigation.replace('Signup') } 
            />

            <Text style={ styles.secondButton }></Text>

            <Button 
                title='Login' 
                onPress={ () => this.props.navigation.replace('Login') }
            />
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
      marginBottom: 50,
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