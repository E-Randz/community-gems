import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { ListItem, ButtonGroup } from "react-native-elements";

import firebase from "firebase";

// import { db } from "../../config/db";
// const db = firebase.database();

// let userRef = db.ref("/Users");

// class HomeScreen extends Component {
//   state = {
//     users: []
//   }

//   componentDidMount () {
//     // userRef.on("value", snapshot => {
//     //   let data = snapshot.val();
//     //   let users = Object.values(data);
//     //   this.setState({
//     //     users
//     //   });
//     // });
//   }

//   render () {
//     return
//       <Text>Hello</Text>
//   }
// }

// export default HomeScreen

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })

class HomeScreen extends Component {
  state = {
    events: [
      {
        title: "event1",
        start: "2010-01-09T12:30:00",
        location: "manchester",
        eventOrganizer: "tom"
      },
      {
        title: "event2",
        start: "2010-01-09T18:30:00",
        location: "salford",
        eventOrganizer: "peter"
      },
      {
        title: "event1",
        start: "2010-01-09T12:30:00",
        location: "manchester",
        eventOrganizer: "user"
      },
      {
        title: "event1",
        start: "2010-01-09T12:30:00",
        location: "manchester",
        eventOrganizer: "user"
      },
      {
        title: "event1",
        start: "2010-01-09T12:30:00",
        location: "manchester",
        eventOrganizer: "user"
      },
      {
        title: "event1",
        start: "2010-01-09T12:30:00",
        location: "manchester",
        eventOrganizer: "user"
      },
      {
        title: "event1",
        start: "2010-01-09T12:30:00",
        location: "manchester",
        eventOrganizer: "user"
      },
      {
        title: "event1",
        start: "2010-01-09T12:30:00",
        location: "manchester",
        eventOrganizer: "user"
      }
    ],
    selectedIndex: 0
  };

  updateIndex = selectedIndex => {
    this.setState({ selectedIndex });
  };

  render() {
    const { events } = this.state;
    const buttons = ["Upcoming", "Attended"];
    const { selectedIndex } = this.state;

    return (
      <ScrollView>
        <View
          style={{
            paddingTop: 80,
            backgroundColor: "#00BFFF",
            alignItems: "center"
          }}
        />
        <Text style={styles.title}>HOME</Text>
        <View style={styles.container}>
          <View style={styles.userInfoBox}>
            <View style={styles.userData}>
              <View style={styles.userText}>
                <Text style={styles.homeText}>Welcome back user!</Text>
                <Text style={styles.homeText}>You have 100 gems 💎</Text>
                <Text style={styles.homeText}>You have 5 Upcoming Events</Text>
              </View>
            </View>

            <View style={styles.buttonsBox}>
              <TouchableOpacity
                style={styles.userInfoBox_buttons}
                onPress={() => this.props.navigation.navigate("Leaderboard")}
              >
                <Text>Leaderboard</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.userInfoBox_buttons}
                onPress={() => this.props.navigation.navigate("Profile")}
              >
                <Text>Profile</Text>
              </TouchableOpacity>
            </View>
          </View>

          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 50 }}
          />

          <View>
            {events.map((event, i) => (
              <ListItem
                key={i}
                leftAvatar={{
                  source: {
                    uri: "https://bootdey.com/img/Content/avatar/avatar6.png"
                  }
                }}
                title={event.title}
                subtitle={`${event.start.slice(0, 10)}\n${
                  event.location
                }\nOrganizer :${event.eventOrganizer}`}
                style={styles.reviewBox}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  userInfoBox: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
    backgroundColor: "#00BFFF",
    padding: 12,
    marginTop: -40,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "black",
    width: "40%"
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
    fontFamily: "Futura",
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
