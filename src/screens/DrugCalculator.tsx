import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";

const DrugCalculator = () => {
  const [milliliter, setMilliliter] = useState("");
  const [selectDoseUnit, setSelectDoseUnit] = useState();
  const [selectTimeUnit, setSelectTimeUnit] = useState("min");

  const [weight, setWeight] = useState("");
  const [selectWeight, setSelectWeight] = useState("kg");

  const [numerator, setNumerator] = useState("");
  const [selectNumerator, setSelectNumerator] = useState("cc");
  const [denominator, setDenominator] = useState("");
  const [selectDenominator, setSelectDenominator] = useState("mg");

  const [dropPerMinute, setDropPerMinute] = useState("");
  const [dropPerMinuteUnit, setDropPerMinuteUnit] = useState("cc/hr");

  const [selectedLanguage, setSelectedLanguage] = useState();

  // denominator 분모, numerator 분자
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEDCALC : 약물 용량 계산기</Text>
      <View style={styles.row}>
        <Text style={styles.subtitle}>Dose : </Text>
        <TextInput
          style={styles.input}
          value={milliliter}
          onChangeText={(unit) => setMilliliter(unit)}
          placeholder="just input number"
          keyboardType="numeric"
        />
        <Text>123</Text>

        <Text style={styles.subtitle}>/kg</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.subtitle}>W</Text>
        <TextInput
          style={styles.input}
          value={milliliter}
          onChangeText={(unit) => setMilliliter(unit)}
          placeholder="just input number"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.subtitle}>약물 용량 계산기</Text>
        <TextInput
          style={styles.input}
          value={milliliter}
          onChangeText={(unit) => setMilliliter(unit)}
          placeholder="just input number"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.row}>
        <TouchableOpacity>
          <Text>123456</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>123456</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.9,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "#f9f9f9",
    alignContent: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default DrugCalculator;
