import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry
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
        autoCorrect={false}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: "100%",
    borderColor: "#eee",
    borderBottomWidth: 2
  },
  label: {
    fontSize: 17,
    padding: 15,
    paddingBottom: 10,
    color: "#333",
    fontWeight: "700",
    width: "100%"
  },
  input: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 2,
    color: "#333",
    fontSize: 18,
    fontWeight: "700",
    width: "100%"
  }
});

export { Input };