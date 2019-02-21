import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Input } from "../Input";
import * as firebase from "firebase";
import { Button } from "../Button";
import postNewUser from '../../db/users'
import getCoords from '../../utils'


class SignUpScreen extends Component {
  state = {
    username: "",
    firstName: "",
    surname: "",
    email: "",
    password: "",
    house_number: "",
    streetName: "",
    postcode: ""
  };

  signUpUser = () => {
    const { email, password, username, firstName, surname, house_number, streetName, postcode } = this.state;
    const { navigate } = this.props.navigation;
    const address = `${house_number}+${streetName}+${postcode}`
    const result = {}
    
    try {
      if (this.state.password.length < 6) {
        alert("Please enter atleast 6 characters");
        return;
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          return getCoords(address)
        })
        .then((res) => {
          const lat = res.data.results[0].geometry.location.lat
          const long = res.data.results[0].geometry.location.lng
          const user = firebase.auth().currentUser;
          postNewUser(user.uid, username, firstName, surname, email, house_number, streetName, postcode, long, lat);
        })
        .then(() => {
          navigate("App");
        });
    } catch (err) {
      console.log(err.toString());
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Sign Up Screen </Text>
        <Input
          placeholder="please enter username"
          label="username"
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
        />
        <Input
          placeholder="please enter first name"
          label="first name"
          onChangeText={firstName => this.setState({ firstName })}
          value={this.state.firstName}
        />
        <Input
          placeholder="please enter surname"
          label="surname"
          onChangeText={surname => this.setState({ surname })}
          value={this.state.surname}
        />
        <Input
          placeholder="please enter email"
          label="email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <Input
          placeholder="please enter password"
          label="password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Input
          placeholder="please enter house number"
          label="house_number"
          onChangeText={house_number => this.setState({ house_number })}
          value={this.state.house_number}
        />
        <Input
          placeholder="please enter street name"
          label="street name"
          onChangeText={streetName => this.setState({ streetName })}
          value={this.state.streetName}
        />
        <Input
          placeholder="please insert postcode"
          label="postcode"
          onChangeText={postcode => this.setState({ postcode })}
          value={this.state.postcode}
        />
        <Button onPress={this.signUpUser}>Add User</Button>
      </ScrollView>
    );
  }
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
top: 0,
left: 0,
right: 0,
bottom: 0
  }
});
