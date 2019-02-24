import React from 'react';
import { TouchableOpacity, Text, ScrollView, View, Input, Alert } from 'react-native'

const ProfileModal = (props) => {

  return (
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
  )
}

export default ProfileModal;

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
