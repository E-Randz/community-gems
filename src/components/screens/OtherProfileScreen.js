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
import moment from "moment";
import firebase from "firebase";
import uuid from "uuid";
import { editUser, addReview, getUserByID } from "../../db/users";
import ReviewModal from "../ReviewModal";

export default class Profile extends Component {
  state = {
    visibleModal: null,
    img: "https://bootdey.com/img/Content/avatar/avatar6.png",
    uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
    username: "",
    description: "",
    userID: null,
    reviews: [],
    gems: 0,
    currentUser: "",
    currentUserID: ""
  };

  retrieveUser = async () => {
    const currentUserID = await firebase.auth().currentUser.uid;
    const currentUser = await getUserByID(currentUserID);
    this.setState({
      currentUser,
      currentUserID
    });
  };

  async componentDidMount() {
    const { userID } = this.props.navigation.state.params;
    const otherUser = await getUserByID(userID);
    this.setUserProfile(otherUser);
    this.retrieveUser();
  }

  updateInput = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  setUserProfile = otherUser => {
    const { userID } = this.props.navigation.state.params;
    const { description, username, image, reviews, gems } = otherUser;
    this.setState({
      userID,
      description,
      username,
      uri: image || "https://bootdey.com/img/Content/avatar/avatar6.png",
      reviews: Object.entries(reviews),
      gems,
      visibleModal: null
    });
  };

  leaveReview = review_body => {
    const { currentUserID, user } = this.state;
    const date = Date.now();
  };

  closeModal = () => {
    this.setState({
      visibleModal: 0
    });
  };

  render() {
    const {
      reviews,
      uri,
      username,
      description,
      gems,
      currentUser,
      currentUserID
    } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header} />
        <Image style={styles.avatar} source={{ uri }} />
        <View style={styles.body}>
          <Text style={styles.name}>{username}</Text>
          <Text style={styles.info}>Gems: {gems}💎</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.setState({ visibleModal: 1 })}
          >
            <Text>Leave A Review</Text>
          </TouchableOpacity>
        </View>
        <Modal isVisible={this.state.visibleModal === 1}>
          <ReviewModal
            leaveReview={this.leaveReview}
            closeModal={this.closeModal}
          />
        </Modal>
        <View style={styles.reviewHolder}>
          {reviews.map(([reviewID, review], i) => (
            <TouchableOpacity
              key={reviewID}
              onPress={() => {
                if (review.reviewer_uid === this.state.currentUserID) {
                  this.props.navigation.navigate("Profile", {
                    user: currentUser,
                    userID: currentUserID
                  });
                } else {
                  this.props.navigation.navigate("OtherProfile", {
                    userID: review.reviewer_uid
                  });
                }
              }}
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
