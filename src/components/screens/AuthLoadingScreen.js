import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default class CreateEventScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Community Gems</Text>
        <ActivityIndicator size='large' style={styles.indicator}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    backgroundColor: 'red'
  }
})