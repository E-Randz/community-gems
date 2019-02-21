import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Picker
} from "react-native";
import { ListItem, ButtonGroup } from "react-native-elements";
import { Constants } from "expo";
import { Dropdown } from "react-native-material-dropdown";

export default class EventsList extends Component {
  state = {
    sort_by: null,
    selectedIndex: 0,
    sort_by: "",
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

  updateIndex = selectedIndex => {
    this.setState({ selectedIndex });
  };

  render() {
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
    const { events, sort_by } = this.state;
    console.log(sort_by);
    const buttons = ["List", "Map"];
    const { selectedIndex } = this.state;
    return (
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Events</Text>
        </View>
        <Dropdown
          valueExtractor={({ value }) => value}
          label="Sort By"
          data={data}
          onChangeText={value => this.setState({ sort_by: value })}
        />

        {/* <View style={styles.container2}>
          <Picker
            selectedValue={this.state.sort_by}
            style={{ width: 200, height: 44 }}
            itemStyle={{ height: 44 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ sort_by: itemValue })
            }
          >
            <Picker.Item label="Date" value="date" />
            <Picker.Item label="Type" value="type" />
          </Picker>
        </View> */}
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 50 }}
        />
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 100
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
    marginTop: 50
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
