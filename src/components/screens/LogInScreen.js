import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input } from "../Input";
import { Button } from "../Button";
import * as firebase from "firebase";

class LogInScreen extends Component {
  state = {
    email: "",
    password: ""
  };

  LogInUser = (email, password) => {
    const { navigate } = this.props.navigation;
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function(user) {
          console.log(user);
          navigate("App");
        });
    } catch (err) {
      console.log(err.toString());
    }
  };

  navigateToApp = () => {
    this.props.navigation.navigate("App");
  };

  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyDTwnYvoGCJCQdAr2IxTueg8stqnAJBIwo",
      authDomain: "fir-auth-16628.firebaseapp.com",
      databaseURL: "https://fir-auth-16628.firebaseio.com",
      projectId: "fir-auth-16628",
      storageBucket: "fir-auth-16628.appspot.com"
    };

    firebase.initializeApp(firebaseConfig);
  }

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
