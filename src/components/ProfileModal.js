import React from 'react';
import { TouchableOpacity, Text, ScrollView, View, StyleSheet } from 'react-native';
import { Input } from './Input';
import PropTypes from 'prop-types';

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
          placeholder="House Number"
          onChangeText={houseNo => updateInput("houseNo", houseNo)}
          value={houseNo}
        />
        <Input
          placeholder="Street"
          onChangeText={street => updateInput("street", street)}
          value={street}
        />
        <Input
          placeholder="Town"
          onChangeText={town => updateInput("town", town)}
          value={town}
        />
        <Input
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

ProfileModal.propTypes = {
  props: PropTypes.object.isRequired,
  onChangeImagePress: PropTypes.func.isRequired, 
  updateInput: PropTypes.func.isRequired,
  saveProfileChanges: PropTypes.func.isRequired,
  setUserInputs: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired, 
  houseNo: PropTypes.string.isRequired, 
  street: PropTypes.string.isRequired, 
  town: PropTypes.string.isRequired, 
  postcode: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  button2: {
    backgroundColor: "#00BFFF",
    height: 50,
    width: 200,
    margin: 5,
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
});
