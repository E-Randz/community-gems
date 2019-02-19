import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class LogInScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Log In Screen</Text>
      </View>
    );
  }
}


export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})