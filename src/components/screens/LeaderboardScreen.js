import React, { Component } from "react";
import { View, Alert, Text, ScrollView } from "react-native";
import { ButtonGroup } from "react-native-elements";
import { getAllUsers } from "../../db/users";
import Leaderboard from "react-native-leaderboard";
import { findLocals } from "../../utils";

export default class AvatarAndClickable extends Component {
  state = {
    allUsers: [],
    localData: [],
    filter: 0
  };

  _alert = (title, body) => {
    Alert.alert(title, body, [{ text: "OK", onPress: () => {} }], {
      cancelable: false
    });
  };

  render() {
    const props = {
      labelBy: "name",
      sortBy: "gems",
      data: this.state.filter > 0 ? this.state.localData : this.state.allUsers,
      icon: "iconUrl",
      onRowPress: (item, index) => {
        this._alert(item.name + ", " + item.gems + " gems, wow!");
      },
      evenRowColor: "#E0F2F7"
    };

    return (
      <ScrollView>
        <View
          style={{
            paddingTop: 50,
            backgroundColor: "#00BFFF",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "white",
              backgroundColor: "#00BFFF",
              paddingBottom: 10
              // fontFamily: "Futura"
            }}
          >
            Gem Leaderboard 💎
          </Text>
          <ButtonGroup
            onPress={x => {
              getAllUsers();
              this.setState({ filter: x });
            }}
            selectedIndex={this.state.filter}
            buttons={["UK", "Local"]}
            containerStyle={{ height: 30 }}
          />
        </View>
        <Leaderboard {...props} />
      </ScrollView>
    );
  }
  fetchAllUsers = async () => {
    const arr = [];
    const users = await getAllUsers();
    for (let user in users) {
      const newObj = {
        name: users[user].username,
        gems: users[user].gems,
        iconUrl: "https://bootdey.com/img/Content/avatar/avatar6.png",
        lat: users[user].lat,
        long: users[user].long
      };
      arr.push(newObj);
    }

    this.setState({
      allUsers: arr,
      localData: findLocals(arr, this.props.navigation.state.params.user)
    });
  };

  componentDidMount() {
    this.fetchAllUsers();
  }
}
