import React, { useState, useEffect } from "react";
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
  const [milliliter, setMilliliter] = useState<number>(0);
  const [selectDoseUnit, setSelectDoseUnit] = useState<string>("");
  const [selectTimeUnit, setSelectTimeUnit] = useState<string>("");

  const [weight, setWeight] = useState<number>(0);
  const [selectWeight, setSelectWeight] = useState<string>("");

  const [numerator, setNumerator] = useState<number>(0);
  const [selectNumerator, setSelectNumerator] = useState<string>("");
  const [denominator, setDenominator] = useState<number>(0);
  const [selectDenominator, setSelectDenominator] = useState<string>("");

  const [dropPerMinute, setDropPerMinute] = useState<number>(0);
  const [dropPerMinuteUnit, setDropPerMinuteUnit] = useState<string>("");
  // denominator 분모, numerator 분자

  useEffect(() => {
    const result: number =
      (milliliter * weight * 60) / (numerator / denominator);
    {
      !result ? setDropPerMinute(0) : setDropPerMinute(result);
    }
  }, [milliliter, weight, denominator, numerator]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEDCALC : 약물 용량 계산기</Text>
      <View style={styles.row}>
        <Text style={styles.subtitle}>Dose : </Text>
        <View>
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              value={milliliter.toString()}
              onChangeText={(unit) => setMilliliter(Number(unit))}
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
              placeholder={{ label: "단위", value: "" }}
              items={[
                { label: "ng/kg", value: "ng/kg" },
                { label: "mcg/kg", value: "mcg/kg" },
                { label: "mg/kg", value: "mg/kg" },
                { label: "grams/kg", value: "grams/kg" },
              ]}
              style={pickerSelectStyles}
            />
          </View>
          <Text>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</Text>
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              value="1"
              editable={false}
              keyboardType="numeric"
            />
            <RNPickerSelect
              onValueChange={(value) => {
                setSelectTimeUnit(value);
                console.log(selectTimeUnit);
              }}
              value={selectTimeUnit}
              placeholder={{ label: "단위", value: "" }}
              items={[
                { label: "min", value: "min" },
                { label: "hr", value: "hr" },
                { label: "day", value: "day" },
              ]}
              style={pickerSelectStyles}
            />
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.subtitle}>Weight : </Text>
        <TextInput
          style={styles.input}
          value={weight.toString()}
          onChangeText={(unit) => setWeight(Number(unit))}
          keyboardType="numeric"
        />
        <RNPickerSelect
          onValueChange={(value) => {
            setSelectWeight(value);
            console.log(selectWeight);
          }}
          value={selectWeight}
          placeholder={{ label: "단위", value: "" }}
          items={[
            { label: "mcg", value: "mcg" },
            { label: "mg", value: "mg" },
            { label: "grams", value: "grams" },
            { label: "units", value: "units" },
            { label: "nanograms", value: "nanograms" },
          ]}
          style={pickerSelectStyles}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.subtitle}>Concentration : </Text>
        <View>
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              value={numerator.toString()}
              onChangeText={(unit) => setNumerator(Number(unit))}
              keyboardType="numeric"
            />
            <RNPickerSelect
              onValueChange={(value) => {
                setSelectNumerator(value);
                console.log(selectNumerator);
              }}
              value={selectNumerator}
              placeholder={{ label: "단위", value: "" }}
              items={[
                { label: "cc", value: "cc" },
                { label: "liters", value: "liters" },
              ]}
              style={pickerSelectStyles}
            />
          </View>
          <Text>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</Text>
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              value={denominator.toString()}
              onChangeText={(unit) => setDenominator(Number(unit))}
              keyboardType="numeric"
            />
            <RNPickerSelect
              onValueChange={(value) => {
                setSelectDenominator(value);
                console.log(selectDenominator);
              }}
              value={selectDenominator}
              placeholder={{ label: "단위", value: "" }}
              items={[
                { label: "kg", value: "kg" },
                { label: "grams", value: "grams" },
                { label: "lbs", value: "lbs" },
              ]}
              style={pickerSelectStyles}
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
        <Text>{dropPerMinute}</Text>
        <RNPickerSelect
          onValueChange={(value) => {
            setDropPerMinuteUnit(value);
            console.log(dropPerMinuteUnit);
          }}
          value={dropPerMinuteUnit}
          placeholder={{ label: "단위", value: "" }}
          items={[
            { label: "cc/hr", value: "cc/hr" },
            { label: "cc/min", value: "cc/min" },
            { label: "cc/dat", value: "cc/day" },
          ]}
          style={pickerSelectStyles}
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    margin: 12,
    fontSize: 16,
    height: 40,
    width: 70,
    color: "#000000",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },
  inputAndroid: {
    marginTop: 5,
    fontSize: 16,
    height: 40,
    width: 150,
    color: "#000000",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },
});
export default DrugCalculator;
