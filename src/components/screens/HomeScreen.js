import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { ListItem, ButtonGroup } from "react-native-elements";
import moment from "moment";

import firebase from "firebase";
import { getUserByID } from "../../db/users";

class HomeScreen extends Component {
  state = {
    selectedIndex: 0,
    pastEvent: false,
    user: null,
    userID: null
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

  updateIndex = selectedIndex => {
    this.setState({ selectedIndex });
  };

  updateUserState = userInfo => {
    this.setState(state => ({
      user: {
        ...state.user,
        ...userInfo
      }
    }));
  };

  updateUserPhoto = uri => {
    this.setState(prevState => {
      const { user } = prevState;
      return {
        user: { ...user, image: uri }
      };
    });
  };

  navigateToEvent = (eventID, user) => {
    this.props.navigation.navigate("EventView", { eventID, user });
  };

  render() {
    const { upcoming, attended, pastEvent, events, user, userID } = this.state;
    const buttons = ["Upcoming", "Attended"];
    const { selectedIndex } = this.state;

    const attendedArr = [];
    const upcomingArr = [];

    if (user && user.Events) {
      const { Events } = user;
      for (let event in Events) {
        const eventObject = {
          ...Events[event],
          eventID: event
        };
        if (Date.now() > eventObject.dateTime) attendedArr.push(eventObject);
        else upcomingArr.push(eventObject);
      }
    }

    return (
      user && (
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
              source={require("../../img/LogoGems.png")}
            />
          </View>
          <Text style={styles.title}>HOME</Text>
          <View style={styles.userInfoBox}>
            <View style={styles.userData}>
              <View style={styles.userText}>
                <Text style={styles.homeText}>
                  Welcome back {user.username}!
                </Text>
                <Text style={styles.homeText}>
                  You have {user.gems} gems 💎
                </Text>
                <Text style={styles.homeText}>
                  You have {upcomingArr.length} Upcoming Events
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.buttonsBox}>
            <TouchableOpacity
              style={styles.userInfoBox_buttons}
              onPress={() => {
                this.props.navigation.navigate("Leaderboard", { user })
              }
              }
            >
              <Text style={{ color: "#00BFFF", fontSize: 12 }}>
                Leaderboard
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.userInfoBox_buttons}
              onPress={() =>
                this.props.navigation.navigate("Profile", {
                  user,
                  userID,
                  updateUserState: this.updateUserState,
                  updateUserPhoto: this.updateUserPhoto
                })
              }
            >
              <Text style={{ color: "#00BFFF", fontSize: 12 }}>Profile</Text>
            </TouchableOpacity>
          </View>

          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 50 }}
          />

          <View>
            {selectedIndex
              ? attendedArr.map((event, i) => (
                  <TouchableOpacity
                    onPress={() =>
                      this.navigateToEvent(event.eventID, { user })
                    }
                    key={i}
                    user={user}
                  >
                    <ListItem
                      key={event.eventID}
                      leftAvatar={{
                        source: {
                          uri: `${event.uri}`
                        }
                      }}
                      title={event.title}
                      subtitle={`${moment(event.dateTime).format(
                        "MMMM Do YYYY, h:mm a"
                      )}\n${event.town}\nOrganizer :${event.creatorUsername}`}
                      style={styles.reviewBox}
                    />
                  </TouchableOpacity>
                ))
              : upcomingArr.map((event, i) => (
                  <TouchableOpacity
                    onPress={() =>
                      this.navigateToEvent(event.eventID, { user })
                    }
                    key={i}
                  >
                    <ListItem
                      key={event.eventID}
                      leftAvatar={{
                        source: {
                          uri: `${event.uri}`
                        }
                      }}
                      title={event.title}
                      subtitle={`${moment(event.dateTime).format(
                        "MMMM Do YYYY, h:mm a"
                      )}\n${event.town}\nOrganizer :${event.creatorUsername}`}
                      style={styles.reviewBox}
                    />
                  </TouchableOpacity>
                ))}
          </View>
        </ScrollView>
      )
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  userInfoBox: {
    flexDirection: "column",
    alignItems: "flex-start"
  },

  userInfoName: {
    flexDirection: "row",
    fontSize: 35,
    marginLeft: 40,
    color: "grey",
    fontWeight: "bold"
  },

  userData: {
    flexDirection: "row"
  },

  reviewBox: {
    fontSize: 6,
    backgroundColor: "#00BFFF",
    fontWeight: "600",
    borderColor: "#00BFFF",
    borderBottomWidth: 2,
    marginTop: 2
  },

  homeText: {
    textAlign: "center",
    fontSize: 20
  },

  userText: {
    width: "100%",
    height: 150,
    textAlign: "center"
  },

  userText_content: {
    justifyContent: "space-evenly",
    color: "grey",
    borderWidth: 1,
    borderColor: "#00BFFF",
    marginRight: 10
  },

  buttonsBox: {
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 16,
    justifyContent: "space-evenly"
  },

  userInfoBox_buttons: {
    backgroundColor: "white",
    padding: 5,
    marginTop: -35,
    marginBottom: 15,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#00BFFF",
    width: "30%"
  },

  eventButtons: {
    flexDirection: "row",
    backgroundColor: "#00BFFF",
    padding: 12,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 4,
    // borderColor: 'rgba(0, 0, 0, 0.1)',
    width: "48.5%",
    borderWidth: 2,
    borderColor: "black"
  },

  eventsList: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00BFFF",
    marginTop: 20
  },

  eventParent: {
    width: "90%",

    marginBottom: 15,
    borderBottomWidth: 2
  },
  eventTitle: {
    fontWeight: "bold"
  },
  title: {
    fontSize: 30,
    color: "white",
    backgroundColor: "#00BFFF",
    paddingBottom: 10,
    //fontFamily: "Futura",
    textAlign: "center",
    marginBottom: 20
  },
  eventDetails: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 20,
    backgroundColor: "blue"
  }
});
