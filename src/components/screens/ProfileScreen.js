import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

export default class Profile extends Component {
  state = {
    visibleModal: null
  };

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Hello!</Text>
      <TouchableOpacity onPress={() => this.setState({ visibleModal: null })}>
        <View style={styles.button}>
          <Text>Close</Text>
        </View>
      </TouchableOpacity>
      {/* {this._renderButton("Close", () => this.setState({ visibleModal: null }))} */}
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
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
          <TouchableOpacity
            onPress={() => this.setState({ visibleModal: 1 })}
            style={styles.buttonContainer}
          >
            <Text> Edit Info</Text>
          </TouchableOpacity>
        </View>
        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>
      </View>
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
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  }
});
