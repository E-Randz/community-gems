import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import * as firebase from "firebase";

export default class CreateEventScreen extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "App" : "Auth");
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ height: 200, width: 200, marginBottom: 30 }}
          source={require("../../img/LogoGems.png")}
        />
        <Text style={{ color: "white", fontSize: 20 }}>
          Welcome to Community Gems
        </Text>

        <ActivityIndicator size="large" style={styles.indicator} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BFFF",
    alignItems: "center",
    justifyContent: "center"
  },
  indicator: {
    color: "red"
  }
});
