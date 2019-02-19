import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from '../Input';

class LogInScreen extends Component {
  state = {
    email: '',
    password: '',
  }
  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <Input 
             placeholder="Enter your email..."
             label="Email Address"
             onChangeText={(email) => this.setState({email})}
             name='email'
             value={this.state.email}
        />
        <Input
          placeholder="Enter your password..."
          label="Password"
          secureTextEntry
          name='password'
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
      </View>
    );
  }
  // handleInput = (event) => {
  //   // console.log(e);
  //   const { name, value } = event.nativeEvent;
  //   this.setState({
  //     [name]: value,
  //   })
  // }
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