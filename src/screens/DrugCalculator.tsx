import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";

const DrugCalculator = () => {
  const [milliliter, setMilliliter] = React.useState("0");

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} keyboardType="numeric" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "#373ad4",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  switchBox: {
    flex: 0.1,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  body: {
    flex: 1.9,
  },
  calcularText: {
    alignSelf: "flex-end",
    fontSize: 30,
    color: "#f9f9f9",
  },
  resultText: {
    alignSelf: "flex-end",
    fontSize: 60,
    color: "#f9f9f9",
  },
  btn: {
    width: 75,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  wordText: {
    fontSize: 25,
    color: "#d9964a",
  },
  btnText: {
    fontSize: 25,
    color: "#f9f9f9",
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  btnBox: {
    flex: 1.2,
    padding: 10,
    justifyContent: "space-evenly",
  },
  valueBox: {
    justifyContent: "flex-end",
    flex: 0.7,
    padding: 10,
  },
  customBtn: {
    width: 170,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    elevation: 25,
    borderRadius: 10,
    backgroundColor: "#d9964a",
  },
  customText: {
    fontSize: 25,
    color: "#f9f9f9",
  },
});
export default DrugCalculator;
