import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import firebase from "firebase";

class CreateEventScreen extends Component {
  state = {
    event_name: "",
    event_adress: "",
    event_type: "",
    event_description: "",
    event_postcode: "",
    event_date: "",
    event_postDate: Date.now(),
    event_numOfVolunteers: "",
    event_timeScale: "",
    event_creator: "user",
    event_participants: ["user", "user2", "user3"]
  };

  addEvent = (
    event_name,
    event_adress,
    event_type,
    event_description,
    event_postcode,
    event_date,
    event_postDate,
    event_numOfVolunteers,
    event_timeScale,
    event_creator,
    event_participants
  ) => {
    console.log("got to function");
    const db = firebase.database();
    const event = {
      event_name,
      event_adress,
      event_type,
      event_description,
      event_postcode,
      event_date,
      event_postDate,
      event_numOfVolunteers,
      event_timeScale,
      event_creator,
      event_participants
    };
    console.log(event);
    try {
      db.ref("Events")
        .push(event)
        .then(event => console.log(event));
    } catch (err) {
      console.log(err.toString());
    }
  };

  render() {
    return (
      <ScrollView>
        <View
          style={{
            paddingTop: 90,
            backgroundColor: "#00BFFF",
            alignItems: "center"
          }}
        />
        <Text style={styles.title}>CREATE AN EVENT</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="please insert event name"
            label="name"
            onChangeText={event_name => this.setState({ event_name })}
            value={this.state.event_name}
          />
          <TextInput
            style={styles.input}
            placeholder="please insert event adress"
            label="adress"
            onChangeText={event_adress => this.setState({ event_adress })}
            value={this.state.event_adress}
          />
          <TextInput
            style={styles.input}
            placeholder="please insert event type"
            label="event type"
            onChangeText={event_type => this.setState({ event_type })}
            value={this.state.event_type}
          />
          <TextInput
            style={styles.input}
            placeholder="please insert event description"
            label="description"
            onChangeText={event_description =>
              this.setState({ event_description })
            }
            value={this.state.event_description}
          />
          <TextInput
            style={styles.input}
            placeholder="please insert the event postcode"
            label="event postcode"
            onChangeText={event_postcode => this.setState({ event_postcode })}
            value={this.state.event_postcode}
          />
          <TextInput
            style={styles.input}
            placeholder="please insert the date of event"
            label="event date"
            onChangeText={event_date => this.setState({ event_date })}
            value={this.state.event_date}
          />
          <TextInput
            style={styles.input}
            placeholder="please insert number of volunteers"
            label="number of volunteers needed"
            onChangeText={event_numOfVolunteers =>
              this.setState({ event_numOfVolunteers })
            }
            value={this.state.event_numOfVolunteers}
          />
          <TextInput
            style={styles.input}
            placeholder="please insert length of event"
            label="length of event"
            onChangeText={event_timeScale => this.setState({ event_timeScale })}
            value={this.state.event_timeScale}
          />
          <TouchableOpacity
            onPress={() => {
              this.addEvent(
                this.state.event_name,
                this.state.event_adress,
                this.state.event_type,
                this.state.event_description,
                this.state.event_postcode,
                this.state.event_date,
                this.state.event_postDate,
                this.state.event_numOfVolunteers,
                this.state.event_timeScale,
                this.state.event_creator,
                this.state.event_participants
              );
              this.props.navigation.navigate("CreateEvent");
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
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
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
    fontFamily: "Futura",
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
