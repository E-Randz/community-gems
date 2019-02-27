import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Image
} from "react-native";
import firebase from "firebase";
import { Dropdown } from "react-native-material-dropdown";
import DatePicker from "react-native-datepicker";
import { postNewEvent } from "../../db/events";

class CreateEventScreen extends Component {
  state = {
    name: "",
    firstLineOfAddress: "",
    town: "",
    postcode: "",
    type: "",
    description: "",
    dateTime: new Date(),
    createdDate: Date.now(),
    noOfVolunteers: "",
    timeScale: "",
    creatorUsername: null,
    creatorUid: null
  };

  setUser = () => {
    const { user, userID } = this.props.navigation.state.params;
    const { username } = user;
    this.setState({
      creatorUid: userID,
      creatorUsername: username
    });
  };

  componentDidMount() {
    this.setUser();
  }

  render() {
    const EventTypes = [
      {
        value: "clean the streets"
      },
      {
        value: "gardening"
      },
      {
        value: "Fundraising"
      },
      {
        value: "Outdoor Activities"
      },
      {
        value: "Housework"
      }
    ];
    const EventLengths = [
      {
        value: "0-1 hour"
      },
      {
        value: "1-3 hours"
      },
      {
        value: "3-6 hours"
      }
    ];
    const EventVolunteers = [
      {
        value: "1"
      },
      {
        value: "2"
      },
      {
        value: "3"
      },
      {
        value: "4"
      },
      {
        value: "5"
      },
      {
        value: "6"
      },
      {
        value: "7"
      },
      {
        value: "8"
      },
      {
        value: "9"
      },
      {
        value: "10"
      }
    ];
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
            source={require("../../img/LogoGems.png")}
          />
        </View>
        <Text style={styles.title}>CREATE AN EVENT</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="please insert event name"
            label="name"
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />
          <TextInput
            style={styles.input}
            placeholder="please insert event adress"
            label="adress"
            onChangeText={firstLineOfAddress =>
              this.setState({ firstLineOfAddress })
            }
            value={this.state.firstLineOfAddress}
          />
          <TextInput
            style={styles.input}
            placeholder="please insert town"
            label="town"
            onChangeText={town => this.setState({ town })}
            value={this.state.town}
          />
          <TextInput
            style={styles.input}
            placeholder="please insert event description"
            label="description"
            onChangeText={description => this.setState({ description })}
            value={this.state.description}
          />
          <TextInput
            style={styles.input}
            placeholder="please insert the event postcode"
            label="event postcode"
            onChangeText={postcode => this.setState({ postcode })}
            value={this.state.postcode}
          />
          <DatePicker
            style={{ width: "50%" }}
            date={this.state.dateTime}
            mode="datetime"
            placeholder="select date"
            format="YYYY-MM-DD hh:mm"
            minDate={Date.now()}
            maxDate="2023-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 12
              },
              dateInput: {
                marginLeft: 49
              },
              dateTouchBody: {
                width: "170%",
                marginTop: 15
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={dateTime => {
              this.setState({ dateTime });
            }}
          />
          <Dropdown
            valueExtractor={({ value }) => value}
            label="Please choose number of volunteers"
            data={EventVolunteers}
            onChangeText={value => this.setState({ noOfVolunteers: value })}
          />
          <Dropdown
            valueExtractor={({ value }) => value}
            label="Please choose event type"
            data={EventTypes}
            onChangeText={value => this.setState({ type: value })}
          />
          <Dropdown
            valueExtractor={({ value }) => value}
            label="Please length of event"
            data={EventLengths}
            onChangeText={value => this.setState({ timeScale: value })}
          />
          <TouchableOpacity
            onPress={() => {
              postNewEvent(
                this.state.name,
                this.state.firstLineOfAddress,
                this.state.town,
                this.state.postcode,
                this.state.type,
                this.state.description,
                this.state.dateTime,
                this.state.createdDate,
                this.state.noOfVolunteers,
                this.state.timeScale,
                this.state.creatorUsername,
                this.state.creatorUid
              ).then(() => this.props.navigation.navigate("EventsList"));
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>ADD EVENT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default CreateEventScreen;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "white",
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  input: {
    marginTop: 10,
    height: 60,
    borderColor: "#E6E6E6",
    borderBottomWidth: 1,
    backgroundColor: "#F8F8F8",
    textAlign: "center",
    fontSize: 17,
    width: "100%"
  },
  title: {
    fontSize: 30,
    color: "white",
    backgroundColor: "#00BFFF",
    paddingBottom: 10,
    ////////fontFamily: "Futura",
    textAlign: "center",
    marginBottom: 20
  },
  button: {
    marginTop: 20,
    backgroundColor: "#00BFFF",
    borderColor: "black",
    borderWidth: 1.5,
    textAlign: "center",
    color: "white",
    fontSize: 64,
    overflow: "hidden",
    padding: 15,
    width: "100%"
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontFamily: "Futura"
  }
});
