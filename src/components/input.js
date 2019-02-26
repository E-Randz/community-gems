import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import PropTypes from "prop-types";

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  name,
  multiline = false,
  numberOfLines = 1
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoCorrect={false}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        value={value}
        autoCapitalize="none"
        name={name}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: "100%",
    borderColor: "#eee",
    borderBottomWidth: 2
  },
  label: {
    fontSize: 17,
    padding: 15,
    paddingBottom: 5,
    color: "#333",
    fontWeight: "700",
    width: "100%"
  },
  input: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 1,
    color: "#333",
    fontSize: 18,
    fontWeight: "700",
    width: "100%"
  }
});

export { Input };

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  name: PropTypes.string,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number
};
