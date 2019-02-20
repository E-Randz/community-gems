import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Input } from "../Input";
import { Button } from "../Button";
import firebase from "firebase";

class CreateEventScreen extends Component {
  state = {
    event_name: "",
    event_adress: "",
    event_type: "",
    event_description: "",
    event_postcode: "",
    event_date: "",
    event_postDate: "",
    event_numOfVolunteers: "",
    event_timeScale: "",
    event_creator: "",
    event_participants: []
  };

  // addEvent = (
  //   event_name,
  //   event_adress,
  //   event_type,
  //   event_description,
  //   event_postcode,
  //   event_date,
  //   event_postDate,
  //   event_numOfVolunteers,
  //   event_timeScale,
  //   event_creator,
  //   event_participants
  // ) => {
  //   console.log("got to function");
  //   const db = firebase.database();
  //   const event = {
  //     event_name,
  //     event_adress,
  //     event_type,
  //     event_description,
  //     event_postcode,
  //     event_date,
  //     event_postDate,
  //     event_numOfVolunteers,
  //     event_timeScale,
  //     event_creator,
  //     event_participants
  //   };
  //   console.log(event);
  //   try {
  //     db.ref("Events")
  //       .push(event)
  //       .then(event => console.log(event));
  //   } catch (err) {
  //     console.log(err.toString());
  //   }
  // };

  componentWillMount() {}

  render() {
    return (
      <View>
        <Text>Hello</Text>
        {/* <Text>Home Screen1</Text>
        <Input
          placeholder="please insert event_name"
          label="event_name"
          onChangeText={event_name => this.setState({ event_name })}
          value={this.state.event_name}
        />
        <Input
          placeholder="please insert event_adress"
          label="event_adress"
          onChangeText={event_adress => this.setState({ event_adress })}
          value={this.state.event_adress}
        />
        <Input
          placeholder="please insert event_type"
          label="event_type"
          onChangeText={event_type => this.setState({ event_type })}
          value={this.state.event_type}
        />
        <Input
          placeholder="please insert event_description"
          label="event_description"
          onChangeText={event_description =>
            this.setState({ event_description })
          }
          value={this.state.event_description}
        />
        <Input
          placeholder="please insert event_postcode"
          label="event_postcode"
          onChangeText={event_postcode => this.setState({ event_postcode })}
          value={this.state.event_postcode}
        />
        <Input
          placeholder="please insert event_date"
          label="event date"
          onChangeText={event_date => this.setState({ event_date })}
          value={this.state.event_date}
        />
        <Input
          placeholder="please insert event_postDate"
          label="event_postDate"
          onChangeText={event_postDate => this.setState({ event_postDate })}
          value={this.state.event_postDate}
        />
        {/* <Input
          placeholder="please insert event_numOfVolunteers"
          label="event_numOfVolunteers"
          onChangeText={event_numOfVolunteers =>
            this.setState({ event_numOfVolunteers })
          }
          value={this.state.event_numOfVolunteers}
        />
        <Input
          placeholder="please insert event_timeScale"
          label="event_timeScale"
          onChangeText={event_timeScale => this.setState({ event_timeScale })}
          value={this.state.event_timeScale}
        />
        <Input
          placeholder="please insert event_creator"
          label="event_creator"
          onChangeText={event_creator => this.setState({ event_creator })}
          value={this.state.event_creator}
        /> */}
        {/* <Input
          placeholder="please insert event_participants"
          label="event_participants"
          onChangeText={event_participants =>
            this.setState({ event_participants })
          }
          value={this.state.event_participants}
        /> */}
        {/* <Button
          onPress={() =>
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
            )
          }
        >
          Add Event
        </Button> */} */}
      </View>
    );
  }
}

export default CreateEventScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
