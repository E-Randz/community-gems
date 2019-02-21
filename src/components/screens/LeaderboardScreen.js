import Leaderboard from "react-native-leaderboard";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

//...
this.state = {
  data: [
    { userName: "Joe", highScore: 52 },
    { userName: "Jenny", highScore: 120 }
    //...
  ] //can also be an object of objects!: data: {a:{}, b:{}}
};
export default class LeaderboardScreen extends Component {
  render() {
    return (
      //   <Leaderboard
      //     data={this.state.data}
      //     sortBy="highScore"
      //     labelBy="userName"
      //   />
      <View>
        <Text>Leaderboard</Text>
      </View>
    );
  }
}
