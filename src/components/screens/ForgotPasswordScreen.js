import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ForgotPasswordScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Forgot Password Screen</Text>
      </View>
    );
  }
}


export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})