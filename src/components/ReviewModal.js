import React, { Component } from 'react';
import { StyleSheet , ScrollView, Text, TouchableOpacity, View} from 'react-native';
import { Input } from '../components/Input';



class ReviewModal extends Component {
  state = {
    review_body: ''
  }

  

  render() {
    const { closeModal, leaveReview } = this.props;
    const { review_body } = this.state;
    return (
      <ScrollView> 
        <View style={styles.modalContent}>
          <Text>Leave a review</Text>
          <Input
            placeholder="Leave a comment..."
            onChangeText={review_body => this.updateInput("review_body", review_body)}
            value={this.state.review_body}
            multiline={true}
            numberOfLines={4}
          />
          <TouchableOpacity onPress={() => leaveReview(review_body)}>
            <View style={styles.button}>
              <Text>Submit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={closeModal}>
            <View style={styles.button}>
              <Text>Close</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }


  updateInput = (name, value) => {
    this.setState({
      [name]: value,
    })
  }
}
 
export default ReviewModal;

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
  body: {
    marginTop: 70,
    alignItems: "center"
    // borderColor: "#00BFFF",
    // borderWidth: 2,
    // borderRadius: 13
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

