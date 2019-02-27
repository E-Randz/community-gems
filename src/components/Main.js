import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  View,
  Image
} from "react-native";
import React, { Component } from "react";
import firebase from "firebase";
import { getUserByID } from "../db/users";
import { ListItem, ButtonGroup } from "react-native-elements";
import Fire from "./Fire";

class Main extends React.Component {
  state = {
    user: null,
    userID: null,
    name: "",
    events: [],
    messagePath: ""
  };

  onChangeText = name => this.setState({ name });

  onPress = () => {
    // 1.
    Fire.shared.test(this.state.messagePath);
    this.props.navigation.navigate("Chat", {
      name: this.state.name,
      person: this.state.user.username
    });
  };

  componentDidMount() {
    this.retrieveUser().then(() => this.getEvents(this.state.user));
  }

  retrieveUser = async () => {
    const userID = await firebase.auth().currentUser.uid;
    const user = await getUserByID(userID);
    this.setState({
      user,
      userID
    });
  };

  getEvents = user => {
    let arr = [];
    if (user && user.Events) {
      const { Events } = user;
      for (let event in Events) {
        const eventObject = {
          ...Events[event],
          eventID: event
        };
        arr.push(eventObject);
      }
      this.setState({ events: arr });
    }
  };

  render() {
    const { user, events } = this.state;
    return (
      <ScrollView>
        <View
          style={{
            paddingTop: 10,
            backgroundColor: "#00BFFF",
            alignItems: "center"
          }}
        >
          <Image
            style={{ height: 60, width: 60, marginLeft: -300 }}
            source={require("../img/LogoGems.png")}
          />
          <Text
            style={{
              fontSize: 30,
              color: "white",
              backgroundColor: "#00BFFF",
              paddingBottom: 10
              // fontFamily: "Futura"
            }}
          >
            CHAT
          </Text>
        </View>
        {events &&
          events.map((event, i) => {
            return (
              <TouchableOpacity>
                <ListItem
                  onPress={() =>
                    this.setState(
                      { messagePath: event.eventID, name: event.name },
                      () => this.onPress()
                    )
                  }
                  style={styles.reviewBox}
                  key={i}
                  leftAvatar={{
                    source: {
                      uri:
                        "http://biomet-education.net/wp-content/uploads/2018/03/communication_discussion_workshop-512.png"
                    }
                  }}
                  title={event.name}
                  subtitle={`${event.town}\n${event.description}\n${
                    event.dateTime
                  }`}
                  style={styles.reviewBox}
                />
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  nameInput: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: "#111111",
    borderWidth: 1
  },
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset
  },
  reviewBox: {
    backgroundColor: "#00BFFF",
    borderColor: "#00BFFF",
    borderBottomWidth: 2,
    marginTop: 2
  }
});

export default Main;
