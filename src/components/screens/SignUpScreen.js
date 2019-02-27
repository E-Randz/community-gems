import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { SignUpInput } from "../SignUpInput";
import * as firebase from "firebase";
import { Button } from "../Button";
import { postNewUser } from "../../db/users";
import { getCoords } from "../../utils";

class SignUpScreen extends Component {
  state = {
    username: "",
    firstName: "",
    surname: "",
    email: "",
    password: "",
    house_number: "",
    streetName: "",
    town: "",
    postcode: ""
  };

  signUpUser = () => {
    const {
      email,
      password,
      username,
      firstName,
      surname,
      house_number,
      streetName,
      town,
      postcode
    } = this.state;
    const { navigate } = this.props.navigation;
    const address = `${house_number}+${streetName}+${town}+${postcode}`;

    try {
      if (this.state.password.length < 6) {
        alert(" atleast 6 characters");
        return;
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          return getCoords(address);
        })
        .then(res => {
          const lat = res.data.results[0].geometry.location.lat;
          const long = res.data.results[0].geometry.location.lng;
          const user = firebase.auth().currentUser;
          postNewUser(
            user.uid,
            username,
            firstName,
            surname,
            email,
            house_number,
            streetName,
            town,
            postcode,
            long,
            lat
          );
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
        <View style={styles.header}>
          <Image
            style={{ height: 60, width: 60, marginLeft: -300 }}
            source={require("../../img/LogoGems.png")}
          />
          <Text style={styles.pageTitle}>SIGN UP</Text>
        </View>
        <SignUpInput
          placeholder="Username"
          label="Please Enter details below..."
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
        />
        <SignUpInput
          placeholder="First Name"
          onChangeText={firstName => this.setState({ firstName })}
          value={this.state.firstName}
        />
        <SignUpInput
          placeholder="Surname"
          onChangeText={surname => this.setState({ surname })}
          value={this.state.surname}
        />
        <SignUpInput
          placeholder="Email Adress"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <SignUpInput
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <SignUpInput
          placeholder="House Number"
          onChangeText={house_number => this.setState({ house_number })}
          value={this.state.house_number}
        />
        <SignUpInput
          placeholder="Street Name"
          onChangeText={streetName => this.setState({ streetName })}
          value={this.state.streetName}
        />
        <SignUpInput
          placeholder="Town"
          onChangeText={town => this.setState({ town })}
          value={this.state.town}
        />
        <SignUpInput
          placeholder="Postcode"
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
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white"
  },
  header: {
    paddingTop: 5,
    backgroundColor: "#00BFFF",
    alignItems: "center"
  },
  pageTitle: {
    fontSize: 30,
    color: "white",
    backgroundColor: "#00BFFF",
    paddingBottom: 10,
    //fontFamily: "Futura",
    textAlign: "center",
    marginBottom: 10
  }
});
