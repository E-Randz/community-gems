import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { db } from '../../config/db';

let userRef = db.ref('/Users')


class HomeScreen extends Component {

  state = {
    users : []
  }

componentDidMount() {
  userRef.on('value',(snapshot) => {
    let data = snapshot.val();
    let users = Object.values(data)
    this.setState({
      users
    })
    
  });
}

  render() {
    const { users } = this.state 
    console.log('users:', users)
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        { users[0] &&
        <View>
          <Text>Username: {this.state.users[0].username} </Text>
          <Text>Gems: {this.state.users[0].gems}</Text>
        </View>
        }
      </View>
    );
  }
}


export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})