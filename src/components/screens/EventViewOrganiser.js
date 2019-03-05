import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Map from "../map";
import { ListItem, ButtonGroup } from "react-native-elements";
import { getEventByID, joinEvent, closeEvent } from "../../db/events";
import { giveGems } from "../../db/users";
import moment from "moment";
import firebase from "firebase";
import Modal from "react-native-modal";

class EventViewOrganiser extends Component {
  state = {
    volunteers: [],
    isVolunteer: false,
    event: {},
    noOfVolunteers: null,
    canJoin: true,
    eventIsActive: false,
    eventDate: 1,
    visibleModal: null,

  };

  getVols = () => {
    const { attendees } = this.state.event;

    const volunteers = Object.entries(attendees).map(([userID, user]) => {
      return {
        userID,
        username: user.username
      };
    });
    this.setState({ volunteers, isVolunteer: true }, () => this.checkCanJoin());
  };

  checkCanJoin = joined => {
    const { noOfVolunteers, volunteers, event } = this.state;
    const lengthExceeded = +noOfVolunteers === volunteers.length;
    const timeExceeded = Date.now() > event.dateTime;
    let canJoin = true;

    if (joined || lengthExceeded || timeExceeded) canJoin = false;
    else {
      const { user } = this.props.navigation.state.params;
      for (let volunteer in volunteers) {
        if (volunteers[volunteer].username === user.username) {
          canJoin = false;
        }
      }
    }
    this.setState({ canJoin });
  };

  awardGems = (volunteers, event) => {
    const { eventID } = this.props.navigation.state.params
    closeEvent(eventID)
      volunteers.map((volunteer, i) => {
      let time = event.timeScale;
      let volID = volunteer.userID;
      giveGems(volID, time);
    });
    this.setState({
      eventIsActive: false
    })
  };

  async componentDidMount() {
    let event;
    if (this.props.navigation.state.params.event) {
      event = this.props.navigation.state.params.event;
    } else {
      const { eventID } = this.props.navigation.state.params;
      event = await getEventByID(eventID);
    }
    this.setState(
      {
        event,
        noOfVolunteers: event.noOfVolunteers,
        eventDate: event.dateTime,
        eventIsActive: !event.isClosed,
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
    if (event) {
      gems =
        event.timeScale === "0-1 hour"
          ? 1
          : event.timeScale === "1-3 hours"
          ? 2
          : 3;
    }
    const isOrganiser = event.creatorUsername === user.username;

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
          {/* <Map event={event} user={user} /> */}
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

            <TouchableOpacity
              style={styles.location_buttons}
              onPress={() => this.setState({ visibleModal: 1 })}
            >
              <Text>View on Map</Text>
          </TouchableOpacity>
          
            {event && canJoin && eventIsActive && (
              <TouchableOpacity
                // disabled={canJoin}
                style={styles.location_buttons}
                onPress={() => {
                  this.handleJoinEvent(event, userID, user.username).then(
                    this.setState({
                      volunteers: [...this.state.volunteers, {userID: user.userID, username: user.username }]
                    })
                  );
                }}
              >
                <Text>Join</Text>
              </TouchableOpacity>
            )}

            {event && eventIsActive && this.state.eventDate < Date.now() && isOrganiser &&  ( < TouchableOpacity
              style={styles.location_buttons}
              onPress={() => {
                this.awardGems(this.state.volunteers, event);
              }}
            >
              <Text>Award Gems!</Text>
              </TouchableOpacity>)}
            


          </View>

          <Text style={styles.title}>volunteers</Text>
          <View style={styles.isVolunteer}>
            {isVolunteer && (
              volunteers.map((volunteer, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() =>
                    this.props.navigation.navigate("OtherProfile", {
                      userID: volunteer.userID
                    })
                  }
                >
                  <ListItem
                    key={i}
                    style={styles.reviewBox}
                    leftAvatar={{
                      source: {
                        uri:
                          "https://bootdey.com/img/Content/avatar/avatar6.png"
                      }
                    }}
                    title={volunteer.username}
                  />
                </TouchableOpacity>
              ))
            )}
            <Modal
              isVisible={this.state.visibleModal === 1}
              onBackdropPress={() => this.setState({ visibleModal: 0 })}
            >
              <Map event={event} user={user} />
            </Modal>
          </View>
        </ScrollView>
      )
    );
  }

  handleJoinEvent = async (event, userID, username) => {
    await joinEvent(event, userID, username);
    this.checkCanJoin(true);
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
