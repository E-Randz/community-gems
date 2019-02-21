import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { ListItem } from "react-native-elements";

export default class EventsList extends Component {
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
    ]
  };
  render() {
    const { events } = this.state;

    return (
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Events</Text>
        </View>
        {/* <View style={styles.body}> */}
        <View style={styles.reviewHolder}>
          {events.map((event, i) => (
            <ListItem
              key={i}
              leftAvatar={{
                source: {
                  uri: "https://bootdey.com/img/Content/avatar/avatar6.png"
                }
              }}
              title={event.title}
              subtitle={`${event.start}\n${event.location}\nOrganizer :${
                event.eventOrganizer
              }`}
              style={styles.reviewBox}
            />
          ))}
        </View>
        {/* </View> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200
  },

  buttonBox: {
    flex: 1,
    alignItems: "center"
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "black",
    fontWeight: "600"
  },
  pageTitle: {
    fontSize: 22,
    color: "black",
    fontWeight: "600",
    alignSelf: "center",
    position: "absolute",
    marginTop: 130
  },
  reviewBox: {
    fontSize: 6,
    backgroundColor: "#00BFFF",
    fontWeight: "600",
    borderColor: "#00BFFF",
    borderWidth: 2,
    marginTop: 2
  },
  //   reviewHolder: {
  //     backgroundColor: "#00BFFF"
  //   },
  reviewBox: {
    fontSize: 6,
    backgroundColor: "#00BFFF",
    fontWeight: "600",
    borderBottomColor: "#00BFFF",
    borderBottomWidth: 1
  },
  body: {
    marginTop: 70,
    alignItems: "center"
    // borderColor: "#00BFFF",
    // borderWidth: 2,
    // borderRadius: 13
  },

  name: {
    fontSize: 30,
    color: "black",
    fontWeight: "600"
  },
  info: {
    fontSize: 20,

    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "black",

    marginTop: 10,
    textAlign: "center"
  },
  buttonContainer: {
    marginTop: 10,
    height: 25,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 120,

    borderRadius: 30,
    backgroundColor: "#00BFFF"
  }
});
