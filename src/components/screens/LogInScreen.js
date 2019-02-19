import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input } from "../Input";
import { Button } from "../Button";
import { auth, signInWithEmailAndPassword } from "firebase";

class LogInScreen extends Component {
  state = {
    email: "",
    password: ""
  };

  LogInUser = (email, password) => {
    try {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(function(user) {
          console.log(user);
        });
    } catch (err) {
      console.log(err.toString());
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Enter your email..."
          label="Email Address"
          onChangeText={email => this.setState({ email })}
          name="email"
          value={this.state.email}
        />
        <Input
          placeholder="Enter your password..."
          label="Password"
          secureTextEntry
          name="password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button
          onPress={() => this.LogInUser(this.state.email, this.state.password)}
        >
          {" "}
          Log In{" "}
        </Button>
        <Button onPress={() => this.props.navigation.navigate("SignUp")}>
          Sign Up
        </Button>
        <Button
          onPress={() => this.props.navigation.navigate("ForgotPassword")}
        >
          {" "}
          Forgot Password{" "}
        </Button>
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
  LogInUser = () => {
    console.log("log in");
    this.props.navigation.navigate("App");
  };
}
export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
