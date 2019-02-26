import firebase from "firebase";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Picker
} from "react-native";
import { ListItem, ButtonGroup, ThemeConsumer } from "react-native-elements";
import { Constants } from "expo";
import { Dropdown } from "react-native-material-dropdown";
import Map from "../map";
import { getEvents } from "../../db/events";
import { getUserByID } from "../../db/users";

export default class EventsList extends Component {
  state = {
    sort_by: null,
    selectedIndex: 0,
    sort_by: "",
    user: null,
    userID: null,
    events: [],
    refreshing: false
  };

  componentDidMount() {
    this.retrieveUser();
    getEvents().then(results => {
      const eventArr = Object.entries(results).map(event => {
        return { eventID: event[0], ...event[1] };
      });
      this.setState({
        events: eventArr
      });
    });
  }

  _onRefresh = () => {
    this.setState({
      refreshing: true
    });
    getEvents().then(results => {
      const eventArr = Object.entries(results).map(event => {
        return {
          eventID: event[0],
          ...event[1]
        };
      });
      this.setState({
        events: eventArr,
        refreshing: false
      });
    });
  };

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

  render() {
    // console.log(this.state.events);
    const data = [
      {
        value: "Date"
      },
      {
        value: "Distance"
      },
      {
        value: "Type"
      }
    ];
    // const arr = this.state.events[0]
    // console.log(arr)
    const { events, sort_by } = this.state;
    const buttons = ["List", "Map"];
    const { selectedIndex, user, userID } = this.state;
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.plusHolder}
            onPress={() =>
              this.props.navigation.navigate("CreateEvent", { user, userID })
            }
          >
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
          <Text style={styles.pageTitle}>EVENTS</Text>
        </View>
        <Dropdown
          valueExtractor={({ value }) => value}
          label="Sort By"
          data={data}
          onChangeText={value => this.setState({ sort_by: value })}
        />
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 50 }}
        />
        <View style={{ height: 520 }}>
          {selectedIndex ? (
            <View style={styles.map}>
              <Map events={this.state.events} />
            </View>
          ) : (
            events.map((event, i) => (
              <TouchableOpacity>
                <ListItem
                  key={i}
                  leftAvatar={{
                    source: {
                      uri: "https://bootdey.com/img/Content/avatar/avatar6.png"
                    }
                  }}
                  title={event.name}
                  subtitle={`${event.timeScale}\n${event.town}\nOrganizer: ${
                    event.creatorUsername
                  }`}
                  style={styles.reviewBox}
                />
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 45,
    backgroundColor: "#00BFFF",
    alignItems: "center"
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
    fontSize: 30,
    color: "white",
    backgroundColor: "#00BFFF",
    paddingBottom: 10,
    //fontFamily: "Futura",
    textAlign: "center",
    marginBottom: 10
  },
  plus: {
    fontSize: 30,
    marginLeft: "85%",
    marginTop: "-10%",
    color: "white",
    backgroundColor: "#318CE7",
    width: 80,
    height: 50,
    //fontFamily: "Futura",
    textAlign: "center"
  },
  reviewBox: {
    fontSize: 6,
    backgroundColor: "#00BFFF",
    fontWeight: "600",
    borderColor: "#00BFFF",
    borderWidth: 2,
    marginTop: 2
  },
  map: {
    height: "200%",
    borderWidth: 1,
    borderColor: "#00BFFF"
  },
  reviewBox: {
    fontSize: 6,
    backgroundColor: "#00BFFF",
    fontWeight: "600",
    borderBottomColor: "#00BFFF",
    borderBottomWidth: 2
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
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  button2: {
    backgroundColor: "#00BFFF",
    padding: 33,
    // fontSize: 50,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  button3: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "lightblue",
    padding: 12,
    // margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    // borderColor: 'rgba(0, 0, 0, 0.1)',
    width: "48.5%",
    borderWidth: 2,
    borderColor: "blue"
  },
  button4: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "lightblue",
    padding: 12,
    // margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    // borderColor: 'rgba(0, 0, 0, 0.1)',
    width: "48.5%",
    borderWidth: 2,
    borderColor: "blue"
  },
  buttonsBox: {
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 16,
    justifyContent: "space-evenly"
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 80
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    margin: 25,
    borderColor: "black",
    borderWidth: 2
  }
});
