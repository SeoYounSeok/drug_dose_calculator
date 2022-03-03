import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import RNPickerSelect from "react-native-picker-select";

const DrugCalculator = () => {
  const [milliliter, setMilliliter] = useState("");
  const [selectDoseUnit, setSelectDoseUnit] = useState();
  const [selectTimeUnit, setSelectTimeUnit] = useState();

  const [weight, setWeight] = useState("");
  const [selectWeight, setSelectWeight] = useState("kg");

  const [numerator, setNumerator] = useState("");
  const [selectNumerator, setSelectNumerator] = useState("cc");
  const [denominator, setDenominator] = useState("");
  const [selectDenominator, setSelectDenominator] = useState("mg");

  const [dropPerMinute, setDropPerMinute] = useState();
  const [dropPerMinuteUnit, setDropPerMinuteUnit] = useState("cc/hr");

  // denominator 분모, numerator 분자
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEDCALC : 약물 용량 계산기</Text>
      <View>
        <RNPickerSelect
          textInputProps={{ underlineColorAndroid: "transparent" }}
          onValueChange={(value) => {
            setSelectDoseUnit(value);
            console.log(selectDoseUnit);
          }}
          value={selectDoseUnit}
          placeholder={{ label: "ng", value: "ng" }}
          items={[
            { label: "mcg", value: "mcg" },
            { label: "mg", value: "mg" },
            { label: "grams", value: "grams" },
          ]}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.subtitle}>Dose : </Text>
        <TextInput
          style={styles.input}
          value={milliliter}
          onChangeText={(unit) => setMilliliter(unit)}
          placeholder=""
          keyboardType="numeric"
        />
        <RNPickerSelect
          textInputProps={{ underlineColorAndroid: "transparent" }}
          onValueChange={(value) => {
            setSelectDoseUnit(value);
            console.log(selectDoseUnit);
          }}
          value={selectDoseUnit}
          placeholder={{ label: "ng", value: "ng" }}
          items={[
            { label: "mcg", value: "mcg" },
            { label: "mg", value: "mg" },
            { label: "grams", value: "grams" },
          ]}
        />
        <Text style={styles.subtitle}>/ kg </Text>
        <RNPickerSelect
          onValueChange={(value) => {
            setSelectTimeUnit(value);
            console.log(selectTimeUnit);
          }}
          value={selectTimeUnit}
          placeholder={{ label: "min", value: "min" }}
          items={[
            { label: "hr", value: "hr" },
            { label: "day", value: "day" },
          ]}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.subtitle}>Weight : </Text>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={(unit) => setWeight(unit)}
          keyboardType="numeric"
        />
        <RNPickerSelect
          onValueChange={(value) => {
            setSelectWeight(value);
            console.log(selectWeight);
          }}
          value={selectWeight}
          placeholder={{ label: "mg", value: "mg" }}
          items={[
            { label: "mcg", value: "mcg" },
            { label: "grams", value: "grams" },
            { label: "units", value: "units" },
            { label: "nanograms", value: "nanograms" },
          ]}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.subtitle}>Concentration : </Text>
        <View>
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              value={numerator}
              onChangeText={(unit) => setNumerator(unit)}
              keyboardType="numeric"
            />
            <RNPickerSelect
              onValueChange={(value) => {
                setSelectNumerator(value);
                console.log(selectNumerator);
              }}
              value={selectNumerator}
              placeholder={{ label: "cc", value: "cc" }}
              items={[{ label: "liters", value: "liters" }]}
            />
          </View>
          <Text>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</Text>
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              value={denominator}
              onChangeText={(unit) => setDenominator(unit)}
              keyboardType="numeric"
            />
            <RNPickerSelect
              onValueChange={(value) => {
                setSelectDenominator(value);
                console.log(selectDenominator);
              }}
              value={selectDenominator}
              placeholder={{ label: "kg", value: "kg" }}
              items={[
                { label: "grams", value: "grams" },
                { label: "lbs", value: "lbs" },
              ]}
            />
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity>
          <Text>Calculate</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>초기화</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.subtitle}>IV Rate : </Text>
        <Text style={styles.subtitle}>{dropPerMinute}</Text>
        <RNPickerSelect
          onValueChange={(value) => {
            setDropPerMinuteUnit(value);
            console.log(dropPerMinuteUnit);
          }}
          value={dropPerMinuteUnit}
          placeholder={{ label: "cc/hr", value: "cc/hr" }}
          items={[
            { label: "cc/min", value: "cc/min" },
            { label: "cc/dat", value: "cc/day" },
          ]}
        />
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
    marginBottom: 30,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 20,
  },
  input: {
    height: 40,
    width: 70,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default DrugCalculator;
