import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput, // 1. <- Add this
  View
} from "react-native";
import React, { Component } from "react";

class Main extends React.Component {
  state = {
    user: null,
    userID: null,
    name: ""
  }; // 2. <- Add the component state

  onChangeText = name => this.setState({ name });

  onPress = () => {
    // 1.
    this.props.navigation.navigate("Chat", { name: this.state.name });
  };

   componentDidMount() {
     this.retrieveUser();
   }

   retrieveUser = async () => {
     const userID = await firebase.auth().currentUser.uid;
     const user = await getUserByID(userID);
     this.setState({
       user,
       userID
     });
   };

  render() {
    return (
      <View>
        <Text style={styles.title}>Enter your name:</Text>
        <TextInput
          onChangeText={this.onChangeText}
          style={styles.nameInput}
          placeHolder="John Cena"
          value={this.state.name}
        />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  nameInput: {
    // 3. <- Add a style for the input
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: "#111111",
    borderWidth: 1
  },
  title: {
    // 4.
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset
  },
  buttonText: {
    // 5.
    marginLeft: offset,
    fontSize: offset
  }
});

export default Main;
