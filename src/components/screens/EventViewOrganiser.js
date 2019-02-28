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
import Map from "../map";
import { ListItem, ButtonGroup } from "react-native-elements";
import { getEventByID, joinEvent } from "../../db/events";

class EventViewOrganiser extends Component {
  state = {
    volunteers: [],
    isVolunteer: true,
    event: {},
    noOfVolunteers: null,
    canJoin: true,
    eventIsActive: true,
    eventDate: 1
  };

  getVols = () => {
    const { attendees } = this.props.navigation.state.params.event;
    let array = [];

    for (let attender in attendees) {
      array.push(attendees[attender]);
    }

    const newArray = array.reduce((acc, curr) => {
      const volunteer = curr.username;
      acc.push(volunteer);
      return acc;
    }, []);
    this.setState({ volunteers: newArray });
  };

  componentDidMount() {
    this.setState(
      {
        event: this.props.navigation.state.params.event,
        noOfVolunteers: this.props.navigation.state.params.event.noOfVolunteers,
        eventDate: this.props.navigation.state.params.event.dateTime
      },
      () => this.getVols()
    );
  }

  render() {
    const {
      volunteers,
      isVolunteer,
      event,
      noOfVolunteers,
      canJoin,
      eventIsActive,
      eventDate
    } = this.state;

    const { user, userID } = this.props.navigation.state.params;
    let gems = 0;
    if (noOfVolunteers === volunteers.length) {
      this.setState({ canJoin: false });
    }
    if (eventDate < Date.now()) {
      this.setState({ eventIsActive: false });
    }
    console.log(eventDate);
    
    if (event) {
      // console.log('event:', event)
      gems =
        event.timeScale === "0-1 hour"
          ? 1
          : event.timeScale === "1-3 hours"
          ? 2
          : 3;
    }

    return (
      event && (
        <ScrollView>
          <View
            style={{
              paddingTop: 80,
              backgroundColor: "#00BFFF",
              alignItems: "center"
            }}
          />
          <Text style={styles.title}>{event.name}</Text>
          <Map event={event} user={user} />
          <View style={styles.eventBox}>
            <Text style={styles.date}>
              {moment(event.dateTime).format("MMMM Do YYYY, h:mm a")}
            </Text>
            <View style={styles.userText}>
              <Text style={styles.gem}>
                💎 {gems} / {event.timeScale},{" "}
              </Text>
              <Image
                style={styles.userIcon}
                source={require("../../../assets/users.png")}
              />
              <Text> x {event.noOfVolunteers}</Text>
            </View>

            <Text style={styles.eventDesc}>{event.description}</Text>
            <Text>
              address:{" "}
              {`${event.firstLineOfAddress}, ${event.town}, ${event.postcode}`}
            </Text>

            {canJoin && eventIsActive && (
              <TouchableOpacity
                // disabled={canJoin}
                style={styles.location_buttons}
                onPress={() => {
                  this.handleJoinEvent(event, userID, user.username).then(
                    this.setState({
                      volunteers: [...this.state.volunteers, user.username]
                    })
                  );
                }}
              >
                <Text>Join</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity style={styles.location_buttons}>
              <Text>Award Gems!</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>volunteers</Text>
          <View style={styles.isVolunteer}>
            {isVolunteer ? (
              volunteers.map((volunteer, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{
                    source: {
                      uri: "https://bootdey.com/img/Content/avatar/avatar6.png"
                    }
                  }}
                  title={volunteer}
                />
              ))
            ) : (
              <View style={styles.isVolunteerFalse}>
                <Text style={styles.isVolunteerFalseChild1}>
                  There are no volunteers for this event.
                </Text>
                <Text style={styles.isVolunteerFalseChild2}>Yet!</Text>
              </View>
            )}
          </View>
        </ScrollView>
      )
    );
  }


  handleJoinEvent = async (event, userID, username) => {
    await joinEvent(event, userID, username);
  };
}

export default EventViewOrganiser;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "white",
    backgroundColor: "#00BFFF",
    paddingBottom: 10,
    // fontFamily: "Futura",
    textAlign: "center",
    marginBottom: 20
  },

  map: {
    height: 200
  },

  eventImage: {
    borderRadius: 16
  },

  eventBox: {
    textAlign: "center",
    padding: 15,
    borderRadius: 15,
    justifyContent: "center"
  },

  eventTitle: {
    flexDirection: "column",
    textAlign: "left"
  },

  eventDesc: {
    justifyContent: "center",
    textAlign: "center",
    padding: 15,
    fontSize: 14
  },
  eventAddress: {
    justifyContent: "center",
    textAlign: "center",
    color: "grey",
    paddingBottom: 15
  },

  eventTitleText: {
    fontSize: 16,
    fontWeight: "bold"
  },

  date: {
    fontSize: 17,
    justifyContent: "center",
    textAlign: "center"
  },

  infoParent: {
    flexDirection: "row",
    textAlign: "left"
  },
  userText: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 17
  },

  reviewBox: {
    fontSize: 6,
    backgroundColor: "#00BFFF",
    fontWeight: "600",
    borderColor: "#00BFFF",
    borderBottomWidth: 2,
    marginTop: 2
  },

  userIcon: {
    width: 20,
    height: 20
  },
  userDataParent: {
    flexDirection: "row",
    paddingTop: 20,
    marginRight: 20
  },

  buttonsBox: {
    flexDirection: "row",
    borderRadius: 16,
    // justifyContent: ,
    padding: 20,
    marginLeft: -30
  },

  location_buttons: {
    backgroundColor: "#00BFFF",
    padding: 5,
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    borderColor: "black",
    borderWidth: 1,
    width: "40%",
    alignSelf: "center"
  },

  isVolunteerTrue: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  isVolunteerFalse: {
    width: "90%",
    marginBottom: 15,
    borderBottomWidth: 2
  },
  isVolunteerFalseChild1: {
    fontWeight: "bold"
  },
  isVolunteerFalseChild2: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18
  }
});
