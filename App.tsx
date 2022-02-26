import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { windowHeight, windowWidth } from "./src/utils/Dimensions";

const onPress = () => {
  console.log("클릭이벤트 간소화");
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.valueBox}>
        <Text style={styles.calcularText}>5 x 5</Text>
        <Text style={styles.resultText}>25</Text>
      </View>
      <View style={styles.btnBox}>
        <View style={styles.btnRow}>
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.wordText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.wordText}>( )</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.wordText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.wordText}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnRow}>
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.btnText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.btnText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.btnText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.wordText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnRow}>
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.btnText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.btnText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.btnText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.wordText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnRow}>
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.btnText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.btnText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.btnText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.wordText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnRow}>
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.btnText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.btnText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} style={styles.customBtn}>
            <Text style={styles.customText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "#243441",
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
    color: "#ff4429",
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
    flex: 0.8,
    padding: 10,
  },
  customBtn: {
    width: 170,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    elevation: 25,
    borderRadius: 10,
    backgroundColor: "#ff4429",
  },
  customText: {
    fontSize: 25,
    color: "#f9f9f9",
  },
});

export default App;
