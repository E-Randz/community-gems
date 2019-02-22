import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import Modal from "react-native-modal";
import { ListItem } from "react-native-elements";
import { Input } from "../Input";
import { ImagePicker, Permissions } from "expo";
import firebase from "firebase";
import uuid from "uuid";

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
  state = {
    visibleModal: null,
    img: "https://bootdey.com/img/Content/avatar/avatar6.png",
    uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
    street: "",
    house: "",
    town: "",
    postcode: "",
    defaultDescription:
      "I am a hardworking volunteer for my community... (edit profile to change info)",
    description: ""
  };

  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  };

  onChangeImagePress = async type => {
    await this.askPermissionsAsync();

    const result = type
      ? await ImagePicker.launchCameraAsync({
          allowsEditing: true
          // aspect: [4, 3]
        })
      : await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3]
        });

    if (!result.cancelled) {
      this.uploadImage(result.uri, "test-image")
        .then(() => {
          Alert.alert("Profile image changed");
        })
        .catch(error => Alert.alert(error));
    }
  };

  uploadImage = async (uri, imageName) => {
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function(e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
    const ref = firebase
      .storage()
      .ref()
      .child(uuid.v4());

    const snapshot = await ref.put(blob);
    blob.close();
    const remoteURI = await snapshot.ref.getDownloadURL();
    this.setState({ img: remoteURI });
  };

  _renderModalContent = () => (
    <ScrollView>
      <View style={styles.modalContent}>
        <Text>Profile Form</Text>
        <Text>Change profile image</Text>

        <TouchableOpacity onPress={() => this.onChangeImagePress("take")}>
          <View style={styles.button2}>
            <Text>Take New Image</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onChangeImagePress("")}>
          <View style={styles.button2}>
            <Text>Choose From Gallery</Text>
          </View>
        </TouchableOpacity>
        <Text>Edit Description</Text>
        <Input
          placeholder="Write something about your self...."
          onChangeText={description => this.setState({ description })}
          value={this.state.description}
        />
        <TouchableOpacity
          onPress={() =>
            this.setState({ defaultDescription: this.state.description }, () =>
              Alert.alert("Done")
            )
          }
        >
          <View style={styles.button}>
            <Text>Submit</Text>
          </View>
        </TouchableOpacity>
        <Text>Change address</Text>
        <Input
          placeholder="House Number"
          onChangeText={house => this.setState({ house })}
          value={this.state.house}
        />
        <Input
          placeholder="Street"
          onChangeText={street => this.setState({ street })}
          value={this.state.street}
        />
        <Input
          placeholder="Town"
          onChangeText={town => this.setState({ town })}
          value={this.state.town}
        />
        <Input
          placeholder="Postcode"
          onChangeText={postcode => this.setState({ postcode })}
          value={this.state.postcode}
        />
        <TouchableOpacity onPress={() => this.setState({ visibleModal: null })}>
          <View style={styles.button}>
            <Text>Submit address</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ visibleModal: null })}>
          <View style={styles.button}>
            <Text>Close</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header} />
        <Image style={styles.avatar} source={{ uri: this.state.img }} />
        <View style={styles.body}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.info}>Gems: 5💎</Text>
          <Text style={styles.description}>
            {this.state.defaultDescription}
          </Text>
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.setState({ visibleModal: 1 })}
          >
            <Text> Edit Info</Text>
          </TouchableOpacity>
        </View>
        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>
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
    borderRadius: 40,
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
    backgroundColor: "#00BFFF",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  button2: {
    backgroundColor: "#00BFFF",
    height: 50,
    width: 200,
    // padding: 15,
    // fontSize: 50,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  }
});
