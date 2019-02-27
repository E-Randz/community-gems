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
import moment from "moment";
import Modal from "react-native-modal";
import { ListItem } from "react-native-elements";
import { Input } from "../Input";
import { ImagePicker, Permissions } from "expo";
import firebase from "firebase";
import uuid from "uuid";
import { editUser, editUserPhoto, addReview } from "../../db/users";
import ReviewModal from "../ReviewModal";

export default class Profile extends Component {
  state = {
    visibleModal: null,
    img: "https://bootdey.com/img/Content/avatar/avatar6.png",
    uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
    street: "",
    houseNo: "",
    town: "",
    postcode: "",
    description: "",
    userID: null,
    reviews: []
  };

  componentDidMount() {
    const {
      user: { image, reviews }
    } = this.props.navigation.state.params;
    this.setState(
      {
        img: image || "https://bootdey.com/img/Content/avatar/avatar6.png",
        reviews: reviews ? Object.entries(reviews) : []
      },
      () => this.setUserInputs()
    );
  }

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
    this.setState({ img: remoteURI }, () => {
      editUserPhoto(this.state.userID, remoteURI).then(() => {
        const { updateUserPhoto } = this.props.navigation.state.params;
        updateUserPhoto(remoteURI);
      });
    });
  };

  updateInput = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  setUserInputs = () => {
    const {
      user,
      userID,
      updateUserState
    } = this.props.navigation.state.params;
    const { description, houseNo, street, town, postcode } = user;
    this.setState({
      userID,
      description,
      houseNo,
      street,
      town,
      postcode,
      visibleModal: null
    });
  };

  saveProfileChanges = async () => {
    const { updateUserState } = this.props.navigation.state.params;

    const { userID, description, houseNo, street, town, postcode } = this.state;
    const err = await editUser(
      userID,
      description,
      houseNo,
      street,
      town,
      postcode
    );
    if (!err) {
      this.setState({ visibleModal: null }, () =>
        updateUserState({ description, houseNo, street, town, postcode })
      );
    }
  };

  leaveReview = review_body => {
    const { userID, user } = this.state;
  };

  closeModal = () => {
    this.setState({
      visibleModal: 0
    });
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
          onChangeText={description =>
            this.updateInput("description", description)
          }
          value={this.state.description}
        />
        <Text>Change address</Text>
        <Input
          placeholder="House Number"
          onChangeText={houseNo => this.updateInput("houseNo", houseNo)}
          value={this.state.houseNo}
        />
        <Input
          placeholder="Street"
          onChangeText={street => this.updateInput("street", street)}
          value={this.state.street}
        />
        <Input
          placeholder="Town"
          onChangeText={town => this.updateInput("town", town)}
          value={this.state.town}
        />
        <Input
          placeholder="Postcode"
          onChangeText={postcode => this.updateInput("postcode", postcode)}
          value={this.state.postcode}
        />
        <TouchableOpacity onPress={this.saveProfileChanges}>
          <View style={styles.button}>
            <Text>Submit</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.setUserInputs}>
          <View style={styles.button}>
            <Text>Close</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  render() {
    const { user } = this.props.navigation.state.params;
    const { reviews } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header} />
        <Image style={styles.avatar} source={{ uri: this.state.img }} />
        <View style={styles.body}>
          <Text style={styles.name}>{this.state.username}</Text>
          <Text style={styles.info}>Gems: {user.gems}💎</Text>
          <Text style={styles.description}>{this.state.description}</Text>
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
          {reviews.map(([reviewID, review], i) => (
            <TouchableOpacity
              key={reviewID}
              onPress={() =>
                this.props.navigation.navigate("OtherProfile", {
                  userID: review.reviewer_uid
                })
              }
            >
              <ListItem
                leftAvatar={{
                  source: {
                    uri: "https://bootdey.com/img/Content/avatar/avatar6.png"
                  }
                }}
                title={review.reviewer_username}
                subtitle={`${review.review_body}\n${moment(
                  review.review_date
                ).format("MMMM Do YYYY, h:mm a")}`}
                style={styles.reviewBox}
              />
            </TouchableOpacity>
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
