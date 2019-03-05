import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import * as firebase from "firebase";
import logo from '../../img/LogoGems.png';
import PropTypes from 'prop-types';

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
          style={styles.image}
          source={logo}
        />
        <Text style={styles.authText}>
          Welcome to Community Gems
        </Text>
        <ActivityIndicator size="large" style={styles.indicator} />
      </View>
    );
  }
}

CreateEventScreen.propTypes = {
  navigation: PropTypes.func.isRequired,
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
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 30
  },
  authText: {
    color: "white", 
    fontSize: 20
  }
});
