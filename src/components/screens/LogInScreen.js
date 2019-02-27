import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { Input } from "../Input";
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

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ height: 300, width: 300, marginTop: 10 }}
          source={require("../../img/LogoGems.png")}
        />
        <Text style={styles.tag}>Volunteering Together</Text>
        <Input
          placeholder="Enter your email..."
          label="Email Address"
          onChangeText={email => this.setState({ email })}
          name="email"
          value={this.state.email}
          style={{ colour: "white" }}
        />
        <Input
          placeholder="Enter your password..."
          label="Password"
          secureTextEntry
          name="password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.LogInUser(this.state.email, this.state.password)}
        >
          <Text>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("SignUp")}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BFFF",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    marginTop: 10,
    height: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    width: "40%",
    borderRadius: 30,
    backgroundColor: "white"
  },
  tag: {
    color: "white",
    fontSize: 20
  }
});
