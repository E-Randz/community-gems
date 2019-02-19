import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input } from "../Input";
import * as firebase from "firebase";
import { Button } from "../Button";

class SignUpScreen extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    house_number: "",
    postcode: ""
  };

  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyBKQA51q2geGB13b9S7pllwZTZRK8AWNkU",
      authDomain: "community-gems.firebaseapp.com",
      databaseURL: "https://community-gems.firebaseio.com",
      projectId: "community-gems",
      storageBucket: "community-gems.appspot.com"
    };
  }

  signUpUser = () => {
    const { email, password } = this.state;
    try {
      if (this.state.password.length < 6) {
        alert("Please enter atleast 6 characters");
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err.toString());
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen </Text>
        <Input
          placeholder="please insert username"
          label="username"
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
        />
        <Input
          placeholder="please insert email"
          label="email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <Input
          placeholder="please insert password"
          label="password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Input
          placeholder="please insert house number"
          label="house_number"
          onChangeText={house_number => this.setState({ house_number })}
          value={this.state.house_number}
        />
        <Input
          placeholder="please insert postcode"
          label="postcode"
          onChangeText={postcode => this.setState({ postcode })}
          value={this.state.postcode}
        />
        <Button onPress={this.signUpUser}>Add User</Button>
      </View>
    );
  }
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
