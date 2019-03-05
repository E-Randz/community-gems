import React from 'react';
import { TouchableOpacity, Text, ScrollView, View, StyleSheet } from 'react-native';
import { Input } from './Input';



const ProfileModal = ({ props }) => {
  const { 
          onChangeImagePress, 
          updateInput,
          saveProfileChanges,
          setUserInputs,
          description, 
          houseNo, 
          street, 
          town, 
          postcode
        } = props;

        console.log(props, 'here');
  return (
    <ScrollView>
      <View style={styles.modalContent}>
        <Text>Profile Form</Text>
        <Text>Change profile image</Text>

        <TouchableOpacity onPress={() => onChangeImagePress("take")}>
          <View style={styles.button2}>
            <Text>Take New Image</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onChangeImagePress("")}>
          <View style={styles.button2}>
            <Text>Choose From Gallery</Text>
          </View>
        </TouchableOpacity>
        <Text>Edit Description</Text>
        <Input
          placeholder="Write something about your self...."
          onChangeText={description => updateInput("description", description)}
          value={description}
        />
        <Text>Change address</Text>
        <Input
          style={styles.input}
          placeholder="House Number"
          onChangeText={houseNo => updateInput("houseNo", houseNo)}
          value={houseNo}
        />
        <Input
          style={styles.input}
          placeholder="Street"
          onChangeText={street => updateInput("street", street)}
          value={street}
        />
        <Input
          style={styles.input}
          placeholder="Town"
          onChangeText={town => updateInput("town", town)}
          value={town}
        />
        <Input
          style={styles.input}
          placeholder="Postcode"
          onChangeText={postcode => updateInput("postcode", postcode)}
          value={postcode}
        />
        <TouchableOpacity onPress={saveProfileChanges}>
          <View style={styles.button}>
            <Text>Submit</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={setUserInputs}>
          <View style={styles.button}>
            <Text>Close</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
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
