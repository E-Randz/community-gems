import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    width: "100%",
    padding: 20,
    backgroundColor: "red",
    borderRadius: 4,
    alignItems: "center"
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 10
  }
});

export { Button };

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired
};

