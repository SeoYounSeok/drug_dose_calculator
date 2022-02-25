import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type ButtonProps = {
  text?: string | number;
  colorText: string;
  onPress: () => {};
};

const Button = ({ text, colorText, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={colorText ? styles.textLight : styles.textDark}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 0.5,
    borderColor: "#19153E",
  },
  zeroContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 0.5,
    borderColor: "#19153E",
  },
  textLight: {
    fontSize: 34,
    color: "#fff",
  },
  textDark: {
    fontSize: 34,
    color: "#575757",
  },
});

export default Button;
