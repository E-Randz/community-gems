import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MessageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Messages</Text>
      </View>
    );
  }
}

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})