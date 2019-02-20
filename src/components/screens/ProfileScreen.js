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

const reviews = [
  {
    comment_id: 1,
    comment_creator: "liam",
    comment_body: "great guy, great work",
    comment_votes: "100",
    comment_date: Date.now()
  },
  {
    comment_id: 2,
    comment_creator: "Mo",
    comment_body: "hard working volunteer",
    comment_votes: "5678943",
    comment_date: Date.now()
  },
  {
    comment_id: 4,
    comment_creator: "Flav",
    comment_body: "hard working volunteer hard wor",
    comment_votes: "5678943",
    comment_date: Date.now()
  },
  {
    comment_id: 5,
    comment_creator: "Yas",
    comment_body: "djodi",
    comment_votes: "5678943",
    comment_date: Date.now()
  },
  {
    comment_id: 3,
    comment_creator: "john",
    comment_body: "e3jhirui34r",
    comment_votes: "3",
    comment_date: Date.now()
  }
];

export default class Profile extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header} />
        <Image
          style={styles.avatar}
          source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
        />
        <View style={styles.body}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.info}>Gems: 5💎</Text>
          <Text style={styles.description}>
            I am a hardworking volunteer for my community... (edit profile to
            change info)
          </Text>
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text> Edit Info</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.reviewHolder}>
          {reviews.map((list, i) => (
            <ListItem
              key={i}
              leftAvatar={{
                source: {
                  uri: "https://bootdey.com/img/Content/avatar/avatar6.png"
                }
              }}
              title={list.comment_creator}
              subtitle={list.comment_body}
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
